'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import gsap from 'gsap'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export default function AnimatedLink({ href, children, className }: Props) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const el = document.getElementById('transition-overlay')
    if (!el) {
      router.push(href)
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href)
      },
    })

    tl.set(el, { y: '100%' }) // empieza desde abajo
    tl.to(el, {
      y: '0%',
      duration: 0.8,
      ease: 'power3.inOut',
    })
  }

  return (
    <a onClick={handleClick} className={className} href={href}>
      {children}
    </a>
  )
}
