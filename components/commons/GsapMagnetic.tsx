'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function GsapMagnetic({children}:any) {
    const ref = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "power4.out"});
        const yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "power4.out"});

        const MouseMove = (e:any) => {
            const {clientX, clientY} = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
/*             const strength = 20; // Adjust the strength of the magnetic effect
            const moveX = (x / (width / 2)) * strength;
            const moveY = (y / (height / 2)) * strength; */
        }

        const MouseLeave = (e:any) => {
            xTo(0);
            yTo(0);
        }

        ref.current.addEventListener("mousemove", MouseMove);
        ref.current.addEventListener("mouseleave", MouseLeave);

        return () => {
                ref.current.removeEventListener("mousemove", MouseMove);
                ref.current.removeEventListener("mouseleave", MouseLeave);
        };
    }, []);
    return (
        React.cloneElement(children, {ref})
    )
}