"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <rect x="2" y="3" width="8" height="8" rx="1.5" />
          <rect x="14" y="3" width="8" height="8" rx="1.5" />
          <rect x="2" y="13" width="8" height="8" rx="1.5" />
          <rect x="14" y="13" width="8" height="8" rx="1.5" />
        </svg>
      ),
      title: "System Design",
      description:
        "Architecting scalable, resilient systems — from distributed microservices to monolithic cores. I map out data flows, define service boundaries, and anticipate failure modes before the first line of code.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      title: "Development",
      description:
        "Building performant, maintainable applications with a sharp eye for detail. Whether it's a pixel-perfect UI or a battle-tested API, I write code that's built to last and easy to reason about.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
          <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
        </svg>
      ),
      title: "Data Handling",
      description:
        "Designing robust data pipelines, schemas, and transformation layers. From raw ingestion to clean querying, I ensure data flows reliably and surfaces the right insights at the right time.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-900 text-white" ref={ref}>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .card-gold { border: 1px solid rgba(212,175,55,0.18); transition: border-color 0.3s ease, background 0.3s ease; }
        .card-gold:hover { border-color: rgba(212,175,55,0.55); background: rgba(212,175,55,0.05); }
        .icon-wrap { transition: color 0.3s ease; }
        .card-gold:hover .icon-wrap { color: #D4AF37; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-yellow-500 text-sm">01</span>
          <div className="w-12 h-px bg-yellow-500 opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            About <em className="text-yellow-500">Me</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal card-gold rounded-xl p-8 bg-stone-800/60 backdrop-blur-sm cursor-default"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div className="icon-wrap text-stone-400 mb-5">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl tracking-tight mb-3 text-white">
                {card.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-yellow-500 opacity-40 mb-4" />

              {/* Description */}
              <p className="text-stone-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}