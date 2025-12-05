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

    return (
        React.cloneElement(children, {ref})
    )
}