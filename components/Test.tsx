"use client";

import Image from "next/image";
import Link from "next/link";

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
    const mouseRadius = 160;

    const dots: Dot[] = [];

    interface Dot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

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

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;

      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      // Smooth delayed cursor
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      dots.forEach((dot) => {
        // =========================
        // CONTINUOUS WAVE MOTION
        // =========================

        const waveX =
          Math.sin((dot.baseY + time * 180) * 0.02) * 2;

        const waveY =
          Math.cos((dot.baseX + time * 180) * 0.02) * 2;

        // Mouse interaction
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius && mouse.active) {
          const angle = Math.atan2(dy, dx);

          const force =
            (mouseRadius - distance) / mouseRadius;

          const push = force * 4;

          dot.vx += Math.cos(angle) * push;
          dot.vy += Math.sin(angle) * push;
        }

        // Return to original + wave position
        dot.vx +=
          (dot.baseX + waveX - dot.x) * 0.05;

        dot.vy +=
          (dot.baseY + waveY - dot.y) * 0.05;

        // Smooth damping
        dot.vx *= 0.88;
        dot.vy *= 0.88;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Glow dots
        ctx.beginPath();

        ctx.fillStyle = "rgba(255, 175, 90, 0.85)";

        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);
   const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#fff8f2]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Content */}
      <section
      id="banner"
      className="relative overflow-hidden font-sans"
    >
      {/* Background large name */}
      <div className="absolute top-52 left-0 right-0 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0">
        <h1
          ref={headingRef}
          className="text-[12vw] font-black uppercase tracking-tighter text-stone-400/40 leading-none whitespace-nowrap"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.04em" }}
        >
          <span className="text-shimmer font-semibold italic">Apu Roy</span>
        </h1>
      </div>

      {/* Main card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 -bottom-32">
        <div
          className="flex flex-col md:flex-row items-center gap-0 bg-black rounded-3xl  max-w-6xl w-full shadow-2xl border-2 border-gold"
          style={{ minHeight: "340px" }}
        >
          {/* Person image placeholder */}
          <div className="relative flex-shrink-0 w-64 md:w-96  md:self-end">
            {/* You can replace this with an actual <Image /> from next/image */}
            <div
              className="w-full h-64 md:h-96  flex items-end justify-center rounded-l-3xl "
              aria-label="Profile photo"
            >
              <Image
                src={"/apuroy.png"}
                alt="Apu Roy"
                height={500}
                width={500}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center px-10 py-12 flex-1 ">
            <p className="text-white text-2xl md:text-3xl font-light leading-snug  max-w-sm">
              <p className="font-serif text-5xl italic text-gold font-semibold tracking-tight pb-3 uppercase ">
                Apu Roy
              </p>

              <span className="font-bold">Full Stack Developer </span>
            </p>
            <p className="text-gray-500 pt-1 pb-6">
              Skilled in full-stack development with strong problem-solving
              abilities. Experienced in debugging and working with complex
              systems. Capable of building robust, scalable frontend and backend
              applications with precision and attention to detail.
            </p>
            <div className="flex flex-wrap gap-3 h-full ">
              <Link
                href="/#projects"
                className="px-6 py-3 rounded-full text-sm bg-gold-400 uppercase font-bold text-black transition-all duration-200  hover:scale-105 active:scale-95"
              >
                View My Works
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 uppercase rounded-full text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-36 md:mb-10">

      </div>

    </section>
    </div>
  );
}