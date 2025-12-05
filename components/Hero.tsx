'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import GsapMagnetic from './commons/GsapMagnetic'

if (typeof window !== "undefined"){
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollTrigger);
}

const PARAGRAPH1 = "I give your brand, project or product a unique identity through an impactful and performant website."

const Hero = () => {

  const container = useRef(null)
  useGSAP(()=> {
    gsap.from(".name", {
      y: 30,         
      autoAlpha: 0,
      duration: .5,
      ease: "power4.InOut",
      stagger: 0.03,
      delay: .7,
    })
    gsap.from(".phrase", {
      y: -20,         
      autoAlpha: 0,
      duration: 1,
      ease: "sine.InOut",
      stagger: 0.07,
      delay: 1.5,
    })
    gsap.from(".reveal", {
      autoAlpha: 0,
      duration: .8,
      ease: "sine.InOut",
      delay: 2.5,
    })
    gsap.to(".button", {
      autoAlpha: 1,
      duration: .8,
      ease: "power4.out",
      delay: 2.5,
    })
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 4,
        pin: true,
      },
      opacity: 0,
      scale: 0.85,
      rotate: -2,
      y: 15,
    })
  }, {scope: container})

    return (
      <div className='relative z-40 h-screen max-h-screen overflow-hidden' ref={container}>
        <div className='flex justify-between w-[93vw] 2xl:w-[85vw] items-center h-screen mx-auto pt-12 relative z-20'>
          <div className='flex flex-col justify-between h-[450px]'>
            <div className=''>
              <div className='overflow-hidden flex'>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>j</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>u</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>a</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>n</h1>
              </div>
              <div className='overflow-hidden flex'>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>b</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>o</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>r</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>i</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>g</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>e</h1>
                <h1 className='name text-8xl font-semibold leading-[82px] tracking-tighter text-left text-whte uppercase'>n</h1>
              </div>
            </div>
            <div className='max-w-[390px] flex gap-1 flex-wrap'>
{/*               {
                  PARAGRAPH1.split(" ").map((char:any, index:any) => (
                          <div className='overflow-hidden' key={index}>
                            <p className='reveal text-white text-2xl' key={index}>{char}</p>
                          </div>
                  ))
              } */}
              <p className='reveal text-white text-xl'>{PARAGRAPH1}</p>
            </div>
            <GsapMagnetic>
              <div className='overflow-hidden w-fit'>
                <button className='opacity-0 button uppercase text-white text-xl py-4 px-10 cursor-pointer hover:bg-transparent border border-[#943f39] duration-500 rounded-4xl bg-[#943f39] w-fit font-medium'>contact me</button>
              </div>
            </GsapMagnetic>
          </div>
            <div className='flex flex-col items-end overflow-hidden h-[450px]'>
              <h1 className='phrase text-8xl text-right font-semibold leading-[82px] text-white uppercase'>crafted</h1>
              <h1 className='phrase text-8xl text-right font-semibold leading-[82px] text-white uppercase'>with</h1>
              <h1 className='phrase text-8xl text-right font-semibold leading-[82px] text-white uppercase'>the</h1>
              <h1 className='phrase text-8xl text-right font-semibold leading-[82px] text-white uppercase'> soul</h1>
              <svg className='phrase w-32 h-32 text-right' xmlns="http://www.w3.org/2000/svg" fill="#FFF" stroke="#FFF" viewBox="0 0 512 512"><path d="M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61-11.47 12.47 25.32 41.61 18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136 62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54 11.38-12.38-25.33-41.61-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120Z"/></svg>
            </div>
        </div>
      </div>
    )
}

export default Hero