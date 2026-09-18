"use client"
import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

const OVERLAY_ID = 'transition-overlay'
const COVER_DURATION = 0.6

interface TransitionLinkProps extends LinkProps {
    children: ReactNode,
    href: string,
    className?: string,
}

export const TransitionLink = ({
    children,
    href,
    className,
    ...props
}: TransitionLinkProps) => {

    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const overlay = document.getElementById(OVERLAY_ID);

        if (!overlay) {
            router.push(href);
            return;
        }

        // Entra desde abajo cubriendo la pantalla antes de navegar;
        // Transitions.tsx se encarga de revelarla una vez cambia la ruta.
        gsap.set(overlay, { y: '100%' });
        gsap.to(overlay, {
            y: '0%',
            duration: COVER_DURATION,
            ease: 'power1.inOut',
            onComplete: () => router.push(href),
        });
    }

  return (
    <Link className={className ?? 'cursor-pointer text-4xl text-foreground hover:underline'} onClick={handleClick} href={href} {...props}>
        {children}
    </Link>
  )
}

export default TransitionLink
