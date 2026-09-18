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

    // Cubrir la pantalla ocurre antes de navegar (ver TransitionLink.tsx);
    // acá solo se revela la ruta ya montada.
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
      id="transition-overlay"
      ref={transitionRef}
      className="fixed inset-0 h-[150vh] z-50 bg-background pointer-events-none"
    />
  )
}


