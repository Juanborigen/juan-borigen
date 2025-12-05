'use client'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

const ServicesTwo = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "top 10%",
            end: "+=8500 10%",
            scrub: 2,
            pin: true
        },
    });
    tl.from(".first h3" , {
        opacity: 0,
        y: 50,
        x: 150,
        rotate: '12deg',
    })
    tl.from(".p__1" , {
        opacity: 0,
        y: 50,
        x: -150,
        rotate: '-12deg',
    })
    tl.from(".p__2" , {
        opacity: 0,
        y: 50,
        x: 150,
        rotate: '12deg',
    })
    tl.from(".img__" , {
        opacity: 0,
        y: 100,
    })
    tl.to(".first div", {
        opacity: 0,
    })
    tl.to(".first h3", {
        scale: 0.65,
        xPercent: '-80',
    })
    tl.to(".services-container", {
        yPercent: -70, 
        opacity: 1,
    })
    tl.from(".services__1", {
        y: 50,
    })
    tl.from(".services__2", {
        y: 500,
    })
    tl.from(".services__3", {
        y: 700,
    })
  })

  /*
     const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services-container",
            start: "top 10%",
            end: "bottom 10%",
            markers: true,
            scrub: 2,
            pin: true
        },
    });
   */
  return (
    <div className='services relative z-20 rounded-t-2xl' >
      <div className='services__content flex flex-col items-center w-[93vw] mx-auto gap-8'>
        <div className='first'>
            <h3 className='uppercase text-[96px] tracking-tight font-bold text-white text-center leading-[90px]'>how can i<br/> help you?</h3>
            <div className='flex flex-col items-center max-w-[600px] gap-6' >
                <p className='text-xl pt-6 text-white p__1 text-center tracking-tight leading-[28px]'>My goal is to convey your brand&apos;s values ​​and identity through your website in a creative and innovative way without sacrificing results, optimization, and a smooth experience.</p>
                <p className='text-xl pt-4 text-white p__2 text-center tracking-tight leading-[28px]'>Finding the perfect balance between <span className='underline text-[#2A4B7C] font-medium'>aesthetics</span> and <span className='underline font-medium text-[#943f39]'>functionality.</span></p>
                <Image className='img__' src={'/assets/images/flower-life-white.jpg'} alt='' height={100} width={100} />
            </div>
        </div>
        <div className='flex flex-col services-container opacity-0 pl-[25%] overflow-hidden'>
           <div className='py-4 bg-black services__1 flex flex-col px-2 rounded-lg rounded-t-none'>
            <div className='flex gap-4 border-b border-[#EDEDED] pb-2 items-center'>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>01.</h3>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>Web Design</h3>
            </div>
            <p className='max-w-[700px] text-white  text-xl pt-4'>Designs that not only look good, but also communicate the essence of your brand. Each project begins with an analysis of the industry and current trends to understand what works in your field and why. Unique, responsive, and conversion-oriented interfaces.<br/> Because good design isn&apos;t just aesthetic: it&apos;s strategic.</p>
          </div>
          <div className='py-4 bg-black services__2 flex flex-col px-2 rounded-lg rounded-t-none -translate-y-[170px]'>
            <div className='flex gap-4 border-b border-[#EDEDED] pb-2 items-center'>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>02.</h3>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>Web Development</h3>
            </div>
            <p className='max-w-[700px] text-white  text-xl pt-4'>Modern, fast, and functional websites that generate real results. The focus is on creating seamless digital experiences that make users want to stay, explore, and return. Optimal performance across all devices is guaranteed, without sacrificing aesthetics or interaction.</p>
          </div>
          <div className='py-4 bg-black services__3 flex flex-col px-2 rounded-lg rounded-t-none -translate-y-[312px]'>
            <div className='flex gap-4 border-b border-[#EDEDED] pb-2 items-center'>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>03.</h3>
              <h3 className='tracking-tighter font-semibold text-white text-6xl'>SEO</h3>
            </div>
            <p className='max-w-[700px] text-white  text-xl pt-4'>It&apos;s no use having an amazing website if no one can find it. From code to images, I optimize every technical aspect to improve search engine rankings. Proper tagging, clean structures, and minimal loading times all contribute to making your website not only visible, but relevant. More traffic, more opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesTwo

//#121420 1C1313

/*
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "top top",
            end: "bottom 50%",
            scrub: 2,
            markers: true,
            pin: true,
        },
    });
    tl.from(".services__content", {
        y: 50,
        rotate: 0.5,
        opacity: 0,
    })
*/