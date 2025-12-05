'use client'
import React from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

  useGSAP(() => {
    gsap.from('.header > *', {
      y: 25,         
      autoAlpha: 0,
      duration: .5,
      ease: "power4.InOut",
      delay: .7,
      stagger: 0.03,
    })

    gsap.to('.header', {
      scrollTrigger: {
        trigger: '.header',
        start: "top top",
        end: "+=500 top",
        scrub: 2,
        pin: true,
      },
      y: -50,
    })
  })

  const handleScroll = (event:React.MouseEvent) => {
    event.preventDefault(); // Prevent the default link behavior
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-screen absolute z-[100] header overflow-hidden'>
      <div className='flex justify-between items-center w-[93vw] mx-auto py-4'>
        <div className='flex items-center gap-12'>
{/*           <div className='flex flex-col'>
            <h4 className='text-xl font-bold'>
                jb.
            </h4>
            <h4 className='text-xs font-medium'>
                creaciones
            </h4>
          </div>
          <h4 className='uppercase font-medium'>•</h4> */}
          <h4 className='uppercase font-medium'>creative web developer</h4>
        </div>
        <div className='flex gap-4 '>
          <Link className='cursor-pointer font-medium uppercase text-sm text-white hover:underline'  href='/'>About</Link>
          <button className='cursor-pointer font-medium uppercase text-sm text-white hover:underline' onClick={handleScroll}>Services</button>
          <Link className='cursor-pointer font-medium uppercase text-sm text-white hover:underline'  href='#mas'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Header