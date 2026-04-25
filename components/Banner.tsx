"use client";

import Image from "next/image";
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
    <section className="relative min-h-screen bg-orange-100 overflow-hidden font-sans">
  

      {/* Background large name */}
      {/* <div className="absolute top-52 left-0 right-0 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0">
        <h1
          ref={headingRef}
          className="text-[12vw] font-black uppercase tracking-tighter text-stone-400/40 leading-none whitespace-nowrap"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.04em" }}
        >
          Apu Roy
        </h1>
      </div> */}

      {/* Main card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 -bottom-32">
        <div
          className="flex flex-col md:flex-row items-center gap-0 bg-black rounded-3xl  max-w-6xl w-full shadow-2xl"
          style={{ minHeight: "340px" }}
        >
          {/* Person image placeholder */}
          <div className="relative flex-shrink-0 w-64 md:w-96 self-end">
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
          <div className="flex flex-col justify-center px-10 py-12 flex-1">
            <h1
          ref={headingRef}
          className="text-6xl font-black uppercase tracking-tighter text-white leading-none whitespace-nowrap"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.04em" }}
        >
          Apu Roy
        </h1>
            <p className="text-white text-2xl md:text-3xl font-light leading-snug mb-8 max-w-sm">
              Empowering Professionals &amp; Entrepreneurs with{" "}
              <span className="font-bold">Modern Marketing Techniques.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-3 rounded-full text-sm font-bold text-black transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "#CBFF4D" }}
              >
                Schedule a Call
              </button>
              <button className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}