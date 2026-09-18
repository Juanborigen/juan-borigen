'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const StoryTelling = () => {

const container = useRef<HTMLDivElement>(null);

useGSAP(() => {
    gsap.from(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "+=2000 top",
        scrub: 2,
        pin: true,
      },
      opacity: 0, 
    });
}, [container]);


  return (
    <div ref={container} className='min-h-screen flex justify-center items-center  relative z-20'>
        <div className='flex flex-col h-full text-white px-4'>
            <h1 className='text-7xl text-left font-bold uppercase'>Tell</h1>
            <h1 className='text-7xl text-left font-bold uppercase'>your </h1>
            <h1 className='text-7xl text-left font-bold uppercase'>story</h1>
        </div>
    </div>
  )
}

export default StoryTelling