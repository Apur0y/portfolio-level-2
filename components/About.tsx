"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbTopologyComplex } from "react-icons/tb";
import { LuCode } from "react-icons/lu";
import { PiDatabaseDuotone } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    Icon: TbTopologyComplex,
    title: "System Design",
    description:
      "Architecting scalable, resilient systems — from distributed microservices to monolithic cores. I map out data flows, define service boundaries, and anticipate failure modes before the first line of code.",
  },
  {
    Icon: LuCode,
    title: "Development",
    description:
      "Building performant, maintainable applications with a sharp eye for detail. Whether it's a pixel-perfect UI or a battle-tested API, I write code that's built to last and easy to reason about.",
  },
  {
    Icon: PiDatabaseDuotone,
    title: "Data Handling",
    description:
      "Designing robust data pipelines, schemas, and transformation layers. From raw ingestion to clean querying, I ensure data flows reliably and surfaces the right insights at the right time.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".about-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
        },
      });

      // Intro text reveal
      gsap.from(".about-intro", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 85%",
        },
      });

      // Cards staggered reveal
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      });

      // Card hover — icon lift
      cardsRef.current.forEach((card) => {
        const icon = card.querySelector(".card-icon");
        card.addEventListener("mouseenter", () =>
          gsap.to(icon, { y: -4, color: "#D4AF37", duration: 0.25, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(icon, { y: 0, color: "#a8a29e", duration: 0.25, ease: "power2.out" })
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 bg-stone-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="about-header flex items-center gap-4 mb-10">
          <span className="font-serif italic text-yellow-500 text-sm">01</span>
          <div className="w-12 h-px bg-yellow-500 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            About <em className="text-yellow-500">Me</em>
          </h2>
        </div>

        {/* Intro description */}
        <p className="about-intro max-w-2xl text-stone-400 text-base leading-relaxed mb-14">
          I'm a full-stack engineer who thrives at the intersection of structure
          and creativity — turning complex requirements into clean, thoughtful
          solutions across the entire stack. Here's where I spend most of my
          time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative rounded-xl p-8 bg-stone-800/60 border border-stone-700/50 hover:border-yellow-500/40 hover:bg-yellow-500/[0.04] transition-colors duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="card-icon text-stone-400 mb-5">
                <Icon size={28} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl tracking-tight text-white mb-3">
                {title}
              </h3>

              {/* Gold divider */}
              <div className="w-8 h-px bg-yellow-500 opacity-40 mb-4 transition-all duration-300 group-hover:w-14 group-hover:opacity-70" />

              {/* Description */}
              <p className="text-stone-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}