// components/Transitions.tsx
'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function Transitions() {

  const pathname = usePathname()
  const transitionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = transitionRef.current
    if (!el) return

    const tl = gsap.timeline()


    tl.to(el, {
      y: '-100%',
      duration: 1,
      ease: 'power1.inOut',
      delay: 0.1,
    })
    tl.to(el, {
      borderRadius: '0 0 50% 50%',
      duration: .7,
      delay: -0.5,
      ease: 'back.out',
    })

  }, [pathname])

  return (
    <div
      ref={transitionRef}
      className="fixed h-[150vh] inset-0 z-50 transition-color pointer-events-none"
    />
  )
}


