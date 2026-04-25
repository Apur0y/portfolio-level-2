"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Banner() {
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
    <section
      id="banner"
      className="relative min-h-screen bg-gradient-to-tl from-orange-200 to-gray-300 overflow-hidden font-sans"
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
          className="flex flex-col md:flex-row items-center gap-0 bg-black rounded-3xl  max-w-6xl w-full shadow-2xl"
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

    </section>
  );
}
