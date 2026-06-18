"use client";
import { useEffect, useRef, useState } from "react";

const educations = [
  {
    year: "2019 — 2025",
    degree: "B.Sc. in Mathematics",
    institution: "Gopalganj Science and Technology University.",
    desc: "Core studies in algorithms, data structures, software engineering, and web development.",
  },
  {
    year: "2024",
    degree: "Complete Web Development Bootcamp",
    institution: "Programming Hero",
    desc: "Comprehensive full-stack bootcamp covering React, Node.js, Express, MongoDB, and modern JavaScript best practices.",
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting)
        ),
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));

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
            <HoverCard key={e.degree} education={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HoverCard({
  education,
  index,
}: {
  education: {
    year: string;
    degree: string;
    institution: string;
    desc: string;
  };
  index: number;
}) {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="reveal relative rounded overflow-hidden p-[1px]"
      style={{
        transitionDelay: `${index * 80}ms`,
        background: isHovered
          ? `radial-gradient(250px circle at ${hoverPos.x}px ${hoverPos.y}px, rgba(212,175,55,0.55), transparent 70%)`
          : "transparent",
        transition: "background 0.3s ease",
      }}
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group bg-stone-800 rounded border border-stone-700 hover:border-gold/40 p-7 transition-all duration-300 relative overflow-hidden  h-full">
        {/* Circle decoration */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-stone-200 group-hover:border-gold-200 transition-colors" />

        <div className="text-[10px] tracking-[0.18em] uppercase text-gold-600 font-semibold mb-3">
          {education.year}
        </div>

        <h3 className="font-serif text-lg leading-snug text-gray-100 mb-2 tracking-tight">
          {education.degree}
        </h3>

        <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
          {education.institution}
        </p>

        <p className="text-sm text-gray-500 leading-relaxed font-light">
          {education.desc}
        </p>
      </div>
    </div>
  );
}