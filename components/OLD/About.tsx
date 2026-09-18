'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const About = () => {

  const container = useRef(null);

  useGSAP(() => {
      gsap.from(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top 80%",
        scrub: 2,
      },
      scaleX: .95,
      opacity: 0,
    })
  }, {scope: container});

  return (
    <div ref={container} className='about h-screen bg-black rounded-2xl relative'>
        
    </div>
  )
}

export default About