'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoSlider from './VideoSlider';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';

const HeroContainer = () => {

const container = useRef(null);

useGSAP(() => {
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=500 top",
        scrub: 2,
        pin: true,
      },
      opacity: 0,
    });
}, [container]);

  return (
    <div className='flex flex-col'>
      <div ref={container} className='max-h-screen'>
          <Header />
          <VideoSlider />
          <Hero />
      </div>
      <div className=''>
        <About />
      </div>
    </div>

  )
}

export default HeroContainer