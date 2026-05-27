"use client";

import { useEffect, useRef } from "react";

export default function DotWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    const spacing = 24;
    const mouseRadius = 150;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    interface Dot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    const dots: Dot[] = [];

    const setupCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      dots.length = 0;

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };

    // Smooth delayed mouse movement
    let targetMouseX = -9999;
    let targetMouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;

      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse smoothing / delay
      mouse.x += (targetMouseX - mouse.x) * 0.08;
      mouse.y += (targetMouseY - mouse.y) * 0.08;

      dots.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && mouse.active) {
          const angle = Math.atan2(dy, dx);

          const force = (mouseRadius - distance) / mouseRadius;

          // Reduced push force
          const push = force * 3.5;

          dot.vx += Math.cos(angle) * push;
          dot.vy += Math.sin(angle) * push;
        }

        // Strong spring return
        dot.vx += (dot.baseX - dot.x) * 0.08;
        dot.vy += (dot.baseY - dot.y) * 0.08;

        // Strong damping
        dot.vx *= 0.82;
        dot.vy *= 0.82;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Dot color
        ctx.fillStyle = "rgba(255, 170, 90, 0.75)";

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fff8f2]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orange-500">
            Interactive Wave
          </h1>

          <p className="mt-4 text-orange-400">
            Smooth delayed water ripple effect
          </p>
        </div>
      </div>
    </div>
  );
}