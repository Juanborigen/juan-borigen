'use client'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const P1 = "My goal is to convey your brand's values ​​and identity through your website in a creative and innovative way without sacrificing results, optimization, and a smooth experience."

const Services = () => {

  useGSAP(() => {

    gsap.from(".services", {
      scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
        end: "top 50%",
        scrub: 2,
      },
      scaleX: .95,
    })
    const tl = gsap.timeline({
            scrollTrigger: {
          trigger: '.services',
          start: 'top center',
      },
    });
    tl.from('.reveal-wrapper > *', {
      opacity: 0,
      yPercent: 25,
      stagger: 0.1,
    })
    tl.from('.text-two', {
      opacity: 0,
      yPercent: 25,
    })
  
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top top',
        end: '=+1500 top',
        pin: true,
        scrub: 2,
    },
    });
    tl2.from(".first__",{
      y: 150,
      x: 55,
      rotate: '6deg',
      opacity: 0,
      ease: 'power4.inOut'
    })
    tl2.from(".second__",{
      y: -50,
      x: 55,
      rotate: '6deg',
      opacity: 0,
      ease: 'power4.inOut'
    })
    tl2.from(".third__",{
      y: -200,
      x: 55,
      rotate: '6deg',
      opacity: 0,
      ease: 'power4.inOut'
    })
  })
  return (
    <div className='services bg-[#FFFFFF] py-12 relative z-20 rounded-t-2xl'>
      <div className='flex flex-col w-[93vw] mx-auto gap-4 max-w-[1400px]'>
        <h3 className='uppercase text-[102px] tracking-tight font-bold text-[#1C1313]'>• how can i help you?</h3>
        <div className='flex'>
          <div className='flex flex-col max-w-[600px] gap-4'>
            <div className='flex gap-1 flex-wrap reveal-wrapper'>
              {
                  P1.split(" ").map((char:string, index:number) => (
                          <p className='reveal text-xl text-[#1c1313] tracking-tight leading-[28px]' key={index}>{char}</p>
                  ))
              }
            </div>
            <p className='text-two text-xl text-[#1c1313] tracking-tight leading-[28px]'>Finding a balance between <span className='underline text-[#2A4B7C] font-medium'>aesthetics</span> and <span className='underline font-medium text-[#943f39]'>functionality.</span></p>
          </div>
          <div className=' flex flex-col gap-20 services__container'>
            <div className='first__  py-4 px-6 rounded-lg bg-[#EDEDED]'>
              <div className='flex flex-col justify-between'>
                <div className='flex gap-4'>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>01.</h3>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>Web Design</h3>
                </div>
                <p className='max-w-[700px] text-[#1c1313] text-xl pt-4'>Designs that not only look good, but also communicate the essence of your brand. Each project begins with an analysis of the industry and current trends to understand what works in your field and why. Unique, responsive, and conversion-oriented interfaces.<br/> Because good design isn&apos;t just aesthetic: it&apos;s strategic.</p>
              </div>
            </div>
            <div className='border-t -translate-y-60 second__ py-4 px-6 rounded-lg bg-[#EDEDED]'>
              <div className='flex flex-col justify-between'>
                <div className='flex gap-4'>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>02.</h3>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>Web Development</h3>
                </div>
                <p className='max-w-[700px] text-[#1c1313] text-xl pt-4'>Modern, fast, and functional websites that generate real results. The focus is on creating seamless digital experiences that make users want to stay, explore, and return. Optimal performance across all devices is guaranteed, without sacrificing aesthetics or interaction.</p>
              </div>
            </div>
            <div className='border-t third__ -translate-y-[445px] py-4 px-6 rounded-lg bg-[#EDEDED]'>
              <div className='flex flex-col justify-between'>
                <div className='flex gap-4 '>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>03.</h3>
                  <h3 className='tracking-tighter font-semibold text-[#1c1313] text-6xl'>SEO</h3>
                </div>
                <p className='max-w-[700px] text-[#1c1313]  text-xl pt-4'>It&apos;s no use having an amazing website if no one can find it. From code to images, I optimize every technical aspect to improve search engine rankings. Proper tagging, clean structures, and minimal loading times all contribute to making your website not only visible, but relevant. More traffic, more opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

//bg-[#1c1313]