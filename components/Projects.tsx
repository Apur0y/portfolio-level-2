"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    desc: "A fully-featured online store with product management, cart system, JWT authentication, and payment integration built with the MERN stack.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
    accent: "from-stone-100 to-amber-50",
  },
  {
    num: "02",
    title: "Task Management App",
    desc: "A collaborative task board with drag-and-drop, real-time updates, user roles, and team workspaces — Trello-inspired UX.",
    tags: ["React", "Express", "MongoDB", "JWT"],
    live: "#",
    github: "#",
    accent: "from-amber-50 to-stone-100",
  },
  {
    num: "03",
    title: "Developer Portfolio CMS",
    desc: "A content-managed portfolio builder where developers showcase projects and skills with a customizable, mobile-first design system.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    live: "#",
    github: "#",
    accent: "from-stone-100 to-yellow-50",
  },
  {
    num: "04",
    title: "Blog & Auth Platform",
    desc: "Full-stack blogging platform with rich text editing, user authentication, comment system, and admin dashboard for content management.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "#",
    github: "#",
    accent: "from-yellow-50 to-stone-100",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">04</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Selected <em className="text-gold">Projects</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="reveal group  border border-stone-100 hover:border-gold-200 transition-all duration-300 overflow-hidden card-lift"
              style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            >
              {/* Thumbnail */}
              <div
                className={`h-44 bg-gradient-to-br ${p.accent} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,150,10,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,10,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <span className="font-serif text-7xl italic text-gold/10 font-bold relative z-10 select-none">
                  {p.num}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 border border-gold-100 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl tracking-tight text-gray-900 mb-2 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 font-light">{p.desc}</p>
                <div className="flex gap-5 pt-4 border-t border-stone-100">
                  <a
                    href={p.live}
                    className="text-xs font-semibold tracking-widest uppercase text-gold hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    Live Demo
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a
                    href={p.github}
                    className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
