"use client";
import { useEffect, useState } from "react";

export default function MovableBlurGradient({ children }:{children: React.ReactNode}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {children}
      <div 
        className="hidden lg:block pointer-events-none absolute inset-0 z-30 transition duration-300" 
        style={{
          backgroundImage: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
    </div>
  );
}