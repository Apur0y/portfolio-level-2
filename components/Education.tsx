"use client";
import { useEffect, useRef } from "react";

const educations = [
  {
    year: "2019 — 2025",
    degree: "B.Sc. in Mathematics",
    institution: "Gopalganj Science and Technology University.",
    desc: "Core studies in algorithms, data structures, software engineering, and web development. Add your actual institution name and dates.",
  },
  {
    year: "2024",
    degree: "Complete Web Development Bootcamp",
    institution: "Programming Hero",
    desc: "Comprehensive full-stack bootcamp covering React, Node.js, Express, MongoDB, and modern JavaScript best practices.",
  }
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 bg-stone-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">05</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
            Education & <em className="text-gold">Certifications</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {educations.map((e, i) => (
            <div
              key={e.degree}
              className="reveal group bg-stone-800 rounded border border-stone-100 hover:border-gold-200 p-7 transition-all duration-300 relative overflow-hidden card-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Circle decoration */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-stone-200 group-hover:border-gold-200 transition-colors" />

              <div className="text-[10px] tracking-[0.18em] uppercase text-gold-600 font-semibold mb-3">
                {e.year}
              </div>
              <h3 className="font-serif text-lg leading-snug text-gray-100 mb-2 tracking-tight">
                {e.degree}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
                {e.institution}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
