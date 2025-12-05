"use client"
import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

interface TransitionLinkProps extends LinkProps {
    children: ReactNode,
    href: string,
}


export const TransitionLink = ({
    children,
    href,
    ...props
}: TransitionLinkProps) => {

    const router = useRouter();


    const handleTransitions = async (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const element = document.getElementsByClassName('element');

            gsap.to(element, {
                duration: 0.5,
                opacity: 1,
                y: 0,
                yPercent: -100,
                ease: 'power2.out',
                stagger: 0.1,
            });

        console.log('Element', element);

        //Exit animation
        router.push(href);
        //Entrance animation
        
    }
    
  return (
    <Link  className='cursor-pointer text-4xl text-white hover:underline' onClick={handleTransitions} href={href} {...props}>
        {children}
    </Link>
  )
}
