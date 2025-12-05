'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Flip from 'gsap/Flip'

gsap.registerPlugin(Flip)

export default function DetailsPage() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shouldFlip = localStorage.getItem('flip')
    if (shouldFlip === 'true' && cardRef.current) {
      const state = Flip.getState('#shared-card')

      // Actualiza el layout (ya estamos en nueva página)
      localStorage.removeItem('flip')

      Flip.from(state, {
        targets: cardRef.current,
        duration: 0.8,
        ease: 'power2.inOut',
        absolute: true,
      })
    }
  }, [])

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div
        ref={cardRef}
        id="shared-card"
        className="w-96 h-60 bg-blue-700 text-white rounded-xl flex items-center justify-center text-2xl"
      >
        Details View
      </div>
    </main>
  )
}
