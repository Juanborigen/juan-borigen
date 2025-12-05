'use client'

import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import Flip from 'gsap/Flip'
import { useRef } from 'react'

gsap.registerPlugin(Flip)

export default function SharedCard() {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    const stgtate = Flip.getState(cardRef.current as Element)

    // Guarda en localStorage o contexto que debe hacer Flip
    localStorage.setItem('flip', 'true')

    // Navega manualmente
    router.push('/details')

    // Necesitamos esperar que la nueva vista monte antes de hacer Flip
    // La animación se hace en el otro componente
  }

  return (
    <div
      ref={cardRef}
      id="shared-card"
      className="w-64 h-40 bg-blue-500 text-white rounded-xl flex items-center justify-center text-xl cursor-pointer"
      onClick={handleClick}
    >
      Click to Flip
    </div>
  )
}
