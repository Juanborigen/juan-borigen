"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useThemeStore } from "@/lib/store/useThemeStore";

// Mismos valores que --color-main-black / --color-main-white en globals.scss:
// las partículas usan el color que contrasta con el fondo de cada tema.
const PARTICLE_COLOR: Record<"light" | "dark", string> = {
  light: "#1C1313",
  dark: "#f9f3f3",
};

const PARTICLE_COUNT = 80000;
const CIRCLE_RADIUS = 0.85;
const RING_COUNT = 2;
const TUBE_RADIUS = 0.035;
const HOVER_RADIUS = 0.8;
const HOVER_FORCE = 0.18;
const RETURN_SPEED = 0.025;

type ParticlesProps = {
  mouse: React.MutableRefObject<[number, number]>;
};

type CircleShape = {
  cx: number;
  cy: number;
  radius: number;
};

// Centros de los círculos en una grilla hexagonal (Flor de la Vida)
const hexCenters = (rings: number, spacing: number) => {
  const centers: { x: number; y: number }[] = [];

  for (let q = -rings; q <= rings; q++) {
    for (let r = -rings; r <= rings; r++) {
      const s = -q - r;
      if (Math.max(Math.abs(q), Math.abs(r), Math.abs(s)) <= rings) {
        centers.push({
          x: spacing * (q + r / 2),
          y: (spacing * r * Math.sqrt(3)) / 2,
        });
      }
    }
  }

  return centers;
};

// Los círculos internos + el círculo envolvente clásico de la Flor de la Vida
const buildFlowerShapes = (rings: number, radius: number): CircleShape[] => {
  const petals = hexCenters(rings, radius).map(({ x, y }) => ({
    cx: x,
    cy: y,
    radius,
  }));

  const boundingRadius = radius * (rings + 1);
  const boundingCircle: CircleShape = { cx: 0, cy: 0, radius: boundingRadius };

  return [...petals, boundingCircle];
};

const Particles = ({ mouse }: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const theme = useThemeStore((state) => state.theme);

  const { positions, origPositions } = useMemo(() => {
    const shapes = buildFlowerShapes(RING_COUNT, CIRCLE_RADIUS);
    const perShape = Math.floor(PARTICLE_COUNT / shapes.length);
    const total = perShape * shapes.length;

    const pos = new Float32Array(total * 3);
    const orig = new Float32Array(total * 3);

    let i = 0;
    for (const { cx, cy, radius } of shapes) {
      for (let k = 0; k < perShape; k++) {
        const theta = (k / perShape) * Math.PI * 2;
        const dirX = Math.cos(theta);
        const dirY = Math.sin(theta);

        // Scatter en sección circular del "tubo" (radial + eje Z)
        const phi = Math.random() * Math.PI * 2;
        const r = TUBE_RADIUS * Math.sqrt(Math.random());
        const ringRadius = radius + Math.cos(phi) * r;

        const x = cx + dirX * ringRadius;
        const y = cy + dirY * ringRadius;
        const z = Math.sin(phi) * r;

        pos[i * 3] = orig[i * 3] = x;
        pos[i * 3 + 1] = orig[i * 3 + 1] = y;
        pos[i * 3 + 2] = orig[i * 3 + 2] = z;
        i++;
      }
    }

    return { positions: pos, origPositions: orig };
  }, []);

  useFrame((_state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y = 0;
    pointsRef.current.rotation.x = 0;

    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const [mx, my] = mouse.current;
    const wx = mx * 5;
    const wy = my * 3;
    const particleCount = pos.length / 3;

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const dx = pos[ix] - wx;
      const dy = pos[ix + 1] - wy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < HOVER_RADIUS && dist > 0) {
        const force = (1 - dist / HOVER_RADIUS) * HOVER_FORCE;
        pos[ix] += (dx / dist) * force;
        pos[ix + 1] += (dy / dist) * force;
      }

      pos[ix] += (origPositions[ix] - pos[ix]) * RETURN_SPEED;
      pos[ix + 1] += (origPositions[ix + 1] - pos[ix + 1]) * RETURN_SPEED;
      pos[ix + 2] += (origPositions[ix + 2] - pos[ix + 2]) * RETURN_SPEED;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={PARTICLE_COLOR[theme]}
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

export const ParticleFlowerOfLife = () => {
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Particles mouse={mouse} />
    </Canvas>
  );
};

export default ParticleFlowerOfLife;
