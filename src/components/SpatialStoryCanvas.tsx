"use client";

import React, { useState, useEffect, useRef, MouseEvent } from "react";

interface SpatialStoryCanvasProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function SpatialStoryCanvas({
  children,
  className = "",
  intensity = 15,
}: SpatialStoryCanvasProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * intensity;
      const y = (e.clientY / innerHeight - 0.5) * intensity;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden [perspective:1400px] [transform-style:preserve-3d] ${className}`}
    >
      {/* Dynamic 3D Parallax Lighting Ambient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-soft-signal-green/30 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -2}px, ${mousePos.y * -2}px, -100px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cream-logo/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 2.5}px, ${mousePos.y * 2.5}px, -150px)`,
        }}
      />

      {/* Main 3D Layered Scene Container */}
      <div
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${-mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
