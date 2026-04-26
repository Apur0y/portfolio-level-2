"use client";
import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "◈",
    title: "Full Stack Thinking",
    desc: "I don't silo myself. Whether it's optimizing a MongoDB aggregation pipeline or shaving 200ms off a LCP score — I own the full delivery, not just my slice of it.",
  },
  {
    icon: "◎",
    title: "Performance-First",
    desc: "Perceived speed is a product decision. I treat Core Web Vitals, bundle budgets, and render strategies with the same rigor I give to features.",
  },
  {
    icon: "◑",
    title: "Clean Code",
    desc: "Code is read far more often than it's written. I write for the next engineer — clear naming, single-responsibility modules, and zero clever tricks that can't be explained in one sentence.",
  },
  {
    icon: "◐",
    title: "Continuous Growth",
    desc: "The ecosystem moves fast. I stay current — not by chasing trends, but by understanding the problems each tool solves and knowing when to reach for them.",
  },
];

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

  return (
    <section id="about" className="py-24 bg-stone-900 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">01</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            About <em className="text-gold">Me</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          {/* Text */}
          <div className="reveal">
            <p className="text-gray-500 leading-relaxed mb-5 font-light text-[15px]">
              I&apos;m{" "}
              <span className="text-gray-100 font-medium">Apu Roy</span>, a Full
              Stack Developer who operates at the intersection of engineering
              precision and product thinking. I don't just write code; I build
              systems that are maintainable, performant, and built to last.
            </p>

            <p className="text-gray-500 leading-relaxed mb-5 font-light text-[15px]">
              My work spans the full stack — from architecting REST APIs and
              managing MongoDB schemas, to crafting pixel-precise, accessible
              interfaces with Next.js and Tailwind. I care deeply about the
              details that most developers skip: bundle size, query efficiency,
              error boundaries, and the kind of UX that just feels right.
              <br />
              <p className="mt-5"></p>
              Professionally, I sharpened my skills as a{" "}
              <span className="text-gray-100 font-medium">
                Frontend Developer at SM Technology
              </span>
              , where I worked within fast-moving teams to ship responsive,
              production-grade interfaces — learning early that the gap between
              working code and production-ready code is where real growth
              happens. Outside of work, I lead team projects, mentor peers, and
              consistently ship personal products — because I believe the best
              way to grow as an engineer is to stay close to the full lifecycle
              of a product: from the first commit to the last deployment.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-5 py-1 bg-gold-50 pr-4">
              <p className="font-serif text-lg italic text-gold-700 leading-relaxed">
                &ldquo;Code is not just syntax — it&apos;s a solution to
                someone&apos;s real problem. I write with that in mind.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8">
              <a
                href="https://drive.google.com/drive/folders/1230XX-Km466vr9KhZlh7-63ivGoTyF3t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-xs font-medium tracking-widest uppercase px-6 py-3 hover:border-gold hover:text-gold transition-all"
              >
                Download Resume
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v7M2 8l4 3 4-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid gap-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal group p-5 border border-stone-100 hover:border-gold-200 transition-all duration-300 bg-stone-50 hover:bg-gold-50/30 card-lift`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-7 h-7 bg-gold-100 flex items-center justify-center mb-3 text-gold text-sm group-hover:bg-gold group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
