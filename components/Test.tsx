"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Test() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen  overflow-hidden font-sans"
      style={{ backgroundImage: "url('/bg2.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full ">
        <div className="grid lg:flex gap-12 items-center justify-between ">
          <div className="relative  flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-[350px] ">
              {/* Photo frame with gold corners */}
              <div className="relative bg-white/10 backdrop-blur-xl p-2">
                {/* Corner decorations */}
                <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold z-20" />
                <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold z-20" />
                <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold z-20" />
                <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold z-20" />

                {/* Photo container */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200">
                  <Image
                    src="/Pro2.png"
                    alt="Apu Roy"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Dark gradient overlay at bottom for 3D text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* LEFT — Text content */}
          <div className="relative z-10 order-2 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold font-sans">
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-white text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-3">
              <span className="">Apu</span>
              <br />
              <span className=" font-semibold italic">Roy</span>
            </h1>

            {/* Title badge */}
            <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 px-4 py-2 mb-6 mt-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
              <span className="text-sm font-medium text-gold-700 tracking-wide">
                Full Stack Developer
              </span>
            </div>

            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8 font-light">
              I craft{" "}
              <span className="text-gray-800 font-medium">
                scalable web applications
              </span>{" "}
              from pixel-perfect frontends to robust backends — turning ideas
              into production-ready digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="bg-gold text-white text-xs font-bold tracking-widest uppercase px-7 py-3.5 hover:bg-gold-600 transition-colors duration-200 shadow-gold-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 text-gray-700 text-xs font-medium tracking-widest uppercase px-7 py-3.5 hover:border-gold hover:text-gold transition-all duration-200"
              >
                Let's Talk
              </a>
            </div>

       
          </div>

        </div>
      </div>
    </section>
  );
}
