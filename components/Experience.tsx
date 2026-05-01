"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "SM Technology",
    period: "May 2025 – Present",
    current: true,
    desc: "Developed and maintained responsive web applications using React.js and Next.js. Collaborated closely with UI/UX designers to translate Figma mockups into pixel-perfect, accessible interfaces. Optimized application performance, improving load speeds and core web vitals. Contributed to component library development and maintained code quality through peer code reviews.",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
  }
  // {
  //   role: "Freelance Full Stack Developer",
  //   company: "Self-Employed",
  //   period: "Nov 2025 — Present",
  //   current: true,
  //   desc: "Designed and delivered end-to-end web applications for clients across various industries. Built full-stack solutions using React, Node.js, and Express with MongoDB databases. Managed client communication, project scoping, and delivery timelines independently.",
  //   tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Next.js", "Full Stack"],
  // },
];

export default function Experience() {
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
    <section id="experience" className="py-24 bg-stone-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">03</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
            Work <em className="text-gold">Experience</em>
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className="reveal group relative bg-stone-800 backdrop-blur-2xl rounded border border-stone-100 hover:border-gold-200 transition-all duration-300 p-8 overflow-hidden card-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gold left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-300 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-serif text-2xl tracking-tight text-gray-100 mb-1">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {exp.current && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-green-600 bg-green-50 border border-green-200 px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  <span className="text-xs text-gray-400 bg-white border border-stone-200 px-3 py-1 tracking-wide">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 font-light max-w-3xl">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] text-gray-500 bg-white border border-stone-200 px-3 py-1 tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
