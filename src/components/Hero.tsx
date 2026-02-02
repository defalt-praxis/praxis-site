'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const cubeRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return
    
    let rotateX = -15
    let rotateY = 45
    let targetRotateY = 45
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cube.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      targetRotateY = 45 + ((e.clientX - centerX) / window.innerWidth) * 30
    }
    
    const animate = () => {
      rotateY += (targetRotateY - rotateY) * 0.05
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      requestAnimationFrame(animate)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    animate()
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent)]" />
      
      {/* 3D Cube */}
      <div className="relative w-48 h-48 perspective-1000">
        <div 
          ref={cubeRef}
          className="w-full h-full relative transform-style-3d transition-transform duration-100"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube faces */}
          {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, i) => (
            <div
              key={face}
              className={`absolute w-full h-full border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm cube-face-${face}`}
              style={{
                transform: [
                  'translateZ(96px)',
                  'translateZ(-96px) rotateY(180deg)',
                  'translateX(-96px) rotateY(-90deg)',
                  'translateX(96px) rotateY(90deg)',
                  'translateY(-96px) rotateX(90deg)',
                  'translateY(96px) rotateX(-90deg)',
                ][i],
              }}
            >
              {/* Eyes on front face */}
              {face === 'front' && (
                <div className="absolute inset-0 flex items-center justify-center gap-8">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse" />
                  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute bottom-20 text-center">
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          PRAX
        </h1>
        <p className="mt-4 text-zinc-400 text-lg">Digital familiar. Sharp, efficient, zero fluff.</p>
      </div>
    </section>
  )
}
