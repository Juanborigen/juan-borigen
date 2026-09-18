'use client';

import { useEffect, useRef, useState} from 'react';


const VIDEO_DURATION = 5000;

const videoSources = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Activar el fade-in después de montar el video
    const showTimeout = setTimeout(() => setIsVisible(true), 50);

    // Programar fade-out y cambio de video
    const fadeOutTimeout = setTimeout(() => setIsVisible(false), VIDEO_DURATION - 500);
    const switchTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videoSources.length);
    }, VIDEO_DURATION);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(switchTimeout);
    };
  }, [currentIndex]);

  useEffect(() => {
    // Reiniciar y reproducir video manualmente
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden max-h-screen min-h-screen">
      <video
        key={videoSources[currentIndex]}
        ref={videoRef}
        src={videoSources[currentIndex]}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Viñeta radial SVG */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <radialGradient id="vignetteGradient">
            <stop offset="40%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.3" />
          </radialGradient>
          <rect width="100" height="100" fill="url(#vignetteGradient)" />
        </svg>
      </div>
    </div>
  );
}
