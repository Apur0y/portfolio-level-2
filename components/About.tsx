"use client";
import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "◈",
    title: "Full Stack Thinking",
    desc: "I connect frontend and backend to deliver seamless, end-to-end solutions.",
  },
  {
    icon: "◎",
    title: "Performance-First",
    desc: "Fast load times and smooth UX are core requirements I build toward.",
  },
  {
    icon: "◑",
    title: "Clean Code",
    desc: "Readable, maintainable, well-structured code is something I take genuine pride in.",
  },
  {
    icon: "◐",
    title: "Continuous Growth",
    desc: "The JS ecosystem moves fast — I learn something new every week.",
  },
];

export default function About() {
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
    <section id="about" className="py-24 bg-gray-100" ref={ref}>
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
              I&apos;m <span className="text-gray-900 font-medium">Apu Roy</span>, a passionate Full Stack
              Developer who loves turning ideas into production-ready digital products. With hands-on
              experience in both frontend and backend development, I thrive at the intersection of design
              and engineering.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5 font-light text-[15px]">
              I&apos;ve worked professionally as a{" "}
              <span className="text-gray-900 font-medium">Frontend Developer at SM Technology</span>, where
              I sharpened my skills building responsive, performant interfaces and collaborating in
              fast-paced development teams.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 font-light text-[15px]">
              My stack centers around the{" "}
              <span className="text-gray-900 font-medium">JavaScript/TypeScript ecosystem</span> — from
              crafting pixel-perfect UIs with React and Next.js to building reliable server-side
              applications with Node.js and Express.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-5 py-1 bg-gold-50 pr-4">
              <p className="font-serif text-lg italic text-gold-700 leading-relaxed">
                &ldquo;Code is not just syntax — it&apos;s a solution to someone&apos;s real problem. I
                write with that in mind.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-xs font-medium tracking-widest uppercase px-6 py-3 hover:border-gold hover:text-gold transition-all"
              >
                Download CV
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v7M2 8l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
