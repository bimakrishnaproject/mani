"use client";

import React, { useState } from "react";

interface SpatialElement3DProps {
  children: React.ReactNode;
  depth?: number;
  hoverScale?: number;
  className?: string;
  glowOnHover?: boolean;
}

export default function SpatialElement3D({
  children,
  depth = 40,
  hoverScale = 1.05,
  className = "",
  glowOnHover = true,
}: SpatialElement3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition-all duration-500 ease-out [transform-style:preserve-3d] ${className}`}
      style={{
        transform: `translateZ(${isHovered ? depth + 30 : depth}px) scale(${
          isHovered ? hoverScale : 1
        })`,
      }}
    >
      {glowOnHover && isHovered && (
        <div className="absolute inset-0 bg-deep-green/10 rounded-3xl blur-2xl -z-10 transition-opacity duration-500" />
      )}
      {children}
    </div>
  );
}
