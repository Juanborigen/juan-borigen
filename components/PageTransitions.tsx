'use client'

import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const el = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const [exiting, setExiting] = useState(false)

  // 🎬 Entrada
  useLayoutEffect(() => {
    if (!exiting && el.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          }
        )
      }, el)

      return () => ctx.revert()
    }
  }, [pathname, exiting])

  // ✅ Reset de "exiting" cuando cambia la ruta
  useEffect(() => {
    setExiting(false)
  }, [pathname])

  // 🎬 Salida + navegación
  useEffect(() => {
    const container = el.current
    if (!container) return

    const links = container.querySelectorAll('[data-transition-link]')

    const handleClick = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute('href')
      if (!href) return

      setExiting(true)

      gsap.to(container, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          router.push(href)
        },
      })
    }

    links.forEach(link => {
      link.addEventListener('click', handleClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, [pathname, router])

  return (
    <div ref={el}>
      {children}
    </div>
  )
}
