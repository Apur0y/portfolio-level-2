"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Parallax on mouse move for 3D text
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      if (titleRef.current) {
        titleRef.current.style.textShadow = `
          ${3 + x * 0.3}px ${3 + y * 0.3}px 0px #A67C00,
          ${6 + x * 0.5}px ${6 + y * 0.5}px 0px #7C5C00,
          ${9 + x * 0.7}px ${9 + y * 0.7}px 0px rgba(124,92,0,0.35),
          ${12 + x}px ${12 + y}px 28px rgba(0,0,0,0.18)
        `;
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden  z-10"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="noise-overlay absolute inset-0" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-200/40 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-200/30 to-transparent" />
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full border border-gold-200/30 animate-spin-slow pointer-events-none" />
      <div className="absolute top-20 right-[10%] w-48 h-48 rounded-full border border-gold-300/20 translate-x-12 translate-y-12 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative order-1 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-[420px] animate-float">

              {/* Photo frame with gold corners */}
              <div className="relative">
                {/* Corner decorations */}
                <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold z-20" />
                <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold z-20" />
                <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold z-20" />
                <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold z-20" />
                <div className="absolute -inset-4 border border-gold-200/40 pointer-events-none" />

                {/* Photo container */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200">

                  {/* ─────────────────────────────────────────────────
                      REPLACE THIS WITH YOUR ACTUAL PHOTO:
                      1. Add your photo as /public/profile.jpg
                      2. Uncomment the <Image> below and remove the placeholder div
                  ───────────────────────────────────────────────── */}

                  {/* PHOTO PLACEHOLDER — replace with your image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
                    {/* Silhouette placeholder */}
                    <div className="w-28 h-28 rounded-full bg-stone-300/60 mb-4 flex items-center justify-center">
                      <span className="font-serif text-5xl text-stone-400/60 italic font-semibold">AR</span>
                    </div>
                    <p className="text-xs text-stone-400 tracking-widest uppercase">
                      Add profile.jpg to /public
                    </p>
                  </div>

                  {/* UNCOMMENT BELOW after adding your photo to /public/profile.jpg */}
                  
                  <Image
                    src="/Pro2.png"
                    alt="Apu Roy"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                 

                  {/* Dark gradient overlay at bottom for 3D text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

                  {/* ─── 3D "Full Stack Developer" Text ─── */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-5">
                    <h2
                      ref={titleRef}
                      className="text-3d-white font-serif font-bold italic text-center leading-tight select-none"
                      style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
                    >
                      Full Stack
                      <br />
                      Developer
                    </h2>
                  </div>

                  {/* "Open to Work" badge */}
                  <div className="absolute top-3 right-3 z-20 bg-gold text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-gold-sm">
                    Open to Work
                  </div>
                </div>
              </div>

              {/* Floating tech pill */}
              <div className="absolute -left-8 top-1/3 bg-white shadow-card border border-stone-100 px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-gray-700">React & Next.js</span>
              </div>
              <div className="absolute -right-8 top-1/2 bg-white shadow-card border border-stone-100 px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "2s" }}>
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
                <span className="text-xs font-medium text-gray-700">Node.js</span>
              </div>
            </div>
          </div>

          {/* LEFT — Text content */}
          <div className="relative z-10 order-2 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold font-sans">
                Portfolio 2025
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-3">
              <span className="text-gray-900">Apu</span>
              <br />
              <span className="text-shimmer font-semibold italic">Roy</span>
            </h1>

            {/* Title badge */}
            <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 px-4 py-2 mb-6 mt-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
              <span className="text-sm font-medium text-gold-700 tracking-wide">
                Full Stack Developer
              </span>
            </div>

            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8 font-light">
              I craft <span className="text-gray-800 font-medium">scalable web applications</span> from
              pixel-perfect frontends to robust backends — turning ideas into
              production-ready digital products.
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

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-stone-200">
              {[
                { num: "2+", label: "Years Experience" },
                { num: "15+", label: "Projects Built" },
                { num: "10+", label: "Technologies" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="block font-serif text-3xl text-gold leading-none">
                    {s.num}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo with 3D "Full Stack Developer" text */}
          <div className="relative z-10 order-1 lg:order-3"></div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-300 to-transparent" />
      </div>
       <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-55">
          {/* <video
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-10"
          >
            <source src="/black-node.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* Dark Overlay for better text readability */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}
        </div>
    </section>
  );
}
