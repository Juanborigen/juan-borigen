'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const size = 15;
    const circle = useRef(null);
    const mouse = useRef({
        x: 0,
        y: 0,
    })
    const delayedMouse = useRef({
        x: 0,
        y: 0,
    })

    const manageMouseMove = (e:MouseEvent) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const lerp = (x:number, y:number, a:number) => x * (1 - a) + y * a;

    const moveCircle = (x:number, y:number) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;
    
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.090),
            y: lerp(y, mouse.current.y, 0.090)
        }
    
        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        window.requestAnimationFrame(animate);
    }
    
    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);

        const scaleUp = () => {
            gsap.to(circle.current, { scale: 1.6, duration: .8, ease: "power3.out", borderColor: "#B76D68" });
        };

        const scaleDown = () => {
            gsap.to(circle.current, { scale: 1, duration: .8, ease: "power3.out", borderColor: "#FFFFFF" });
        };

        const targets = document.querySelectorAll("a, button, link, [data-cursor='hover']");

        targets.forEach((el) => {
            el.addEventListener("mouseenter", scaleUp);
            el.addEventListener("mouseleave", scaleDown);
        });

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", scaleUp);
                el.removeEventListener("mouseleave", scaleDown);
            });
        };
    }, []);

    return(
        <div 
            ref={circle}
            className="fixed z-50 flex bg-[#B76D68] top-0 left-0 rounded-sm mix-blend-difference pointer-events-none custom-cursor"
            style={{
                width: size,
                height: size,
            }}
        >
        </div>
    )
}