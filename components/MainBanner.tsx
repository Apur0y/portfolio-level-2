"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/Apur0y",
    className: "hover:text-white",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/apu-r0y/",
    className: "hover:text-blue-600",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:apuroy@email.com",
    className: "hover:text-red-600",
  },
];

export default function MainBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns slow zoom
      gsap.to(bgRef.current, {
        scale: 1.12,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Floating orbs
      gsap.to(orb1Ref.current, {
        x: 60,
        y: -40,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(orb2Ref.current, {
        x: -50,
        y: 55,
        duration: 11,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(orb3Ref.current, {
        x: 40,
        y: 30,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Mouse parallax
      const onMouseMove = (e: MouseEvent) => {
        const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
        const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(bgRef.current, {
          x: xPct * -18,
          y: yPct * -12,
          duration: 1.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden font-sans"
    >
      {/* Background image — parallax + Ken Burns */}
      <div
        ref={bgRef}
        className="absolute inset-[-8%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-950/60" />

      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[12%] left-[8%] w-72 h-72 rounded-full bg-gray-500/10 blur-[90px] pointer-events-none will-change-transform"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-amber-400/10 blur-[110px] pointer-events-none will-change-transform"
      />
      <div
        ref={orb3Ref}
        className="absolute top-[45%] left-[55%] w-56 h-56 rounded-full bg-gray-600/10 blur-[70px] pointer-events-none will-change-transform"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-44 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center justify-between">
          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-[350px]">
              <div className="relative bg-white/10 backdrop-blur-xl p-2">
                <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gray-500 z-20" />
                <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-500 z-20" />
                <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-500 z-20" />
                <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gray-500 z-20" />
                <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200">
                  <Image
                    src="/Pro2.png"
                    alt="Apu Roy"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="relative z-10 order-2 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gray-500" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold font-sans">
                Portfolio
              </span>
            </div>

            <h1 className="text-white font-semibold text-5xl md:text-6xl xl:text-7xl space-x-4">
              <span>Apu</span>
              <span className="font-semibold">Roy</span>
            </h1>

            <div className="inline-flex items-center my-4">
              <span className="text-3xl font-medium text-gray-400 tracking-wide">
                Full Stack Developer
              </span>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-md mb-8 font-light">
              I craft{" "}
              <span className="text-gray-200 font-medium">
                scalable web applications
              </span>{" "}
              from pixel-perfect frontends to robust backends — turning ideas
              into production-ready digital products.
            </p>

            <div className="flex  pb-6 gap-5 mx-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-all duration-300 text-white ${social.className}  hover:scale-125 `}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="border text-white text-xs font-bold tracking-widest uppercase px-7 py-3.5 transition-colors hover:border-gray-500 hover:text-gray-500 duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 text-gray-100 text-xs font-medium tracking-widest uppercase px-7 py-3.5 hover:border-gray-500 hover:text-gray-500 transition-all duration-200"
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
