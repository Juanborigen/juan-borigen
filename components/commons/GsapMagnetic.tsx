'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

type Props = {
    children: React.ReactNode
}

export default function GsapMagnetic({children}:Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;   // ⬅️ Previene usar null

        const el = ref.current;

        const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "power4.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "power4.out" });

        const MouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const MouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("mousemove", MouseMove);
        el.addEventListener("mouseleave", MouseLeave);

        return () => {
            el.removeEventListener("mousemove", MouseMove);
            el.removeEventListener("mouseleave", MouseLeave);
        };
    }, []);

    // --- SOLUCIÓN DEL ERROR ---
    // 1. Verificamos que 'children' sea un único elemento React válido
    if (!React.isValidElement(children)) {
        // Si no es un elemento válido (es un array, string, null, etc.),
        // simplemente retornamos lo que se nos pasó o un mensaje de error.
        return children; 
    }

    // 2. Usamos el Asignamiento de Tipo (Type Assertion) para convencer a TypeScript
    // de que el elemento es el tipo correcto para recibir la ref.
    return (
        React.cloneElement(children as React.ReactElement<any>, { ref })
    )
}