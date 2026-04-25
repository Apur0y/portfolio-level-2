"use client";
import { useEffect, useRef } from "react";

const frontendSkills = [
  { name: "HTML", pct: 95 },
  { name: "CSS", pct: 95 },
  { name: "JavaScript", pct: 92 },
  { name: "TypeScript", pct: 85 },
  { name: "React.js", pct: 90 },
  { name: "Next.js", pct: 82 },
  { name: "Redux", pct: 85 },
  { name: "RTK Query", pct: 80 },
  { name: "Tailwind CSS", pct: 88 },
  { name: "React Router", pct: 85 },
];

const backendSkills = [
  { name: "Node.js", pct: 84 },
  { name: "Express.js", pct: 80 },
  { name: "REST API", pct: 86 },
  { name: "MongoDB", pct: 75 },
  { name: "Firebase", pct: 78 },
  { name: "JWT", pct: 82 },
  { name: "Socket.io", pct: 70 },
];

const toolsSkills = [
  { name: "Git", pct: 90 },
  { name: "GitHub", pct: 90 },
  { name: "Postman", pct: 85 },
  { name: "Vercel", pct: 78 },
  { name: "Netlify", pct: 75 },
  { name: "Figma", pct: 80 },
];

const otherSkills = [
  { name: "Zod", pct: 75 },
  { name: "Stripe", pct: 80 },
  { name: "JSPDF", pct: 70 },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "RTK Query",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
  "Firebase",
  "JWT",
  "Socket.io",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
  "Figma",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
              const w = bar.dataset.w ?? "0";
              bar.style.width = w + "%";
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 " ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">02</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Skills & <em className="text-gold">Expertise</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Frontend */}
          <div className="reveal">
            <h3 className="font-serif text-xl italic text-gold-700 mb-6 pb-3 border-b border-stone-200">
              Frontend Development
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 font-medium w-36 shrink-0">{s.name}</span>
                  <div className="flex-1 h-px bg-stone-200 relative">
                    <div
                      className="skill-bar-fill absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 to-gold"
                      data-w={s.pct}
                      style={{ width: 0 }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-gold border-2 border-white shadow-sm" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gold w-8 text-right">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <h3 className="font-serif text-xl italic text-gold-700 mb-6 pb-3 border-b border-stone-200">
              Backend & Tools
            </h3>
            <div className="space-y-5">
              {backendSkills.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 font-medium w-36 shrink-0">{s.name}</span>
                  <div className="flex-1 h-px bg-stone-200 relative">
                    <div
                      className="skill-bar-fill absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 to-gold"
                      data-w={s.pct}
                      style={{ width: 0 }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-gold border-2 border-white shadow-sm" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gold w-8 text-right">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Cloud */}
        <div className="reveal pt-8 border-t border-stone-200">
          <h3 className="font-serif text-xl italic text-gold-700 mb-6">Full Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 border border-stone-200 text-xs text-gray-600 tracking-widest hover:border-gold hover:text-gold hover:bg-gold-50 transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
