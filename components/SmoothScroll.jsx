'use client'
import { ReactLenis } from '../lenis'

function SmoothScroll({children}) {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 1.5, smoothTouch: true }}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScroll