"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// ── Per-card image slideshow ──────────────────────────────────────────────────
function ProjectImage({
  images,
  title,
  accent,
  isList,
}: {
  images: string[];
  title: string;
  accent: string;
  isList: boolean;
}) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 900);
  };

  const stopCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(0);
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${accent} cursor-pointer ${
        isList ? "w-56 shrink-0" : "h-52 w-full"
      }`}
      style={isList ? { minHeight: "160px" } : {}}
      onMouseEnter={startCycle}
      onMouseLeave={stopCycle}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,150,10,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,10,0.2) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Stacked images with cross-fade */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          sizes={isList ? "224px" : "(max-width: 768px) 100vw, 50vw"}
        />
      ))}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-amber-500 w-3" : "bg-white/60 w-1.5"
              }`}
            />
          ))}
        </div>
      )}

      {/* "Hover to preview" hint */}
      <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-semibold uppercase tracking-widest bg-black/40 text-white px-2 py-0.5 rounded-full">
          Hover to preview
        </span>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const observeCards = useCallback(() => {
    if (!ref.current) return;

    const cards = ref.current.querySelectorAll<HTMLElement>(".reveal");

    // Reset to hidden before re-observing so animation replays on toggle
    cards.forEach((el) => {
      el.classList.remove("visible");
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add("visible");
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );

    cards.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Re-run whenever view changes; rAF ensures DOM has painted first
  useEffect(() => {
    const frame = requestAnimationFrame(() => observeCards());
    return () => cancelAnimationFrame(frame);
  }, [view, observeCards]);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .card-lift {
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .card-lift:hover {
          box-shadow: 0 10px 36px rgba(180, 130, 10, 0.12);
          transform: translateY(-3px);
        }
      `}</style>

      <section id="projects" className="py-24" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">

          {/* ── Section header ── */}
          <div className="flex items-center justify-between mb-14">
            <div className="flex items-center gap-4">
              <span className="font-serif italic text-amber-600 text-sm">04</span>
              <div className="w-12 h-px bg-amber-400 opacity-50" />
              <h2 className="font-serif text-4xl text-white md:text-5xl tracking-tight">
                Selected <em className="text-amber-600">Projects</em>
              </h2>
            </div>

            {/* View toggle */}
            <div className="flex gap-2 ">
              {(["grid", "list"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1 text-xs border capitalize transition-all duration-200 ${
                    view === v
                      ? "bg-amber-500 text-white border-amber-500"
                      : "text-gray-500 border-gray-200 hover:border-amber-400"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* ── Cards ── */}
          <div
            className={
              view === "grid"
                ? "grid md:grid-cols-2 gap-5"
                : "flex flex-col gap-4"
            }
          >
            {projects.map((p, i) => (
              <div
                key={p.num}
                className={`reveal card-lift group bg-white border border-stone-100 hover:border-amber-200 overflow-hidden ${
                  view === "list" ? "flex flex-row" : "flex flex-col"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <Link href={`/project/${p.slug}`} className="flex-1">
                {/* Image slideshow */}
                <ProjectImage
                  images={p.images}
                  title={p.title}
                  accent={p.accent}
                  isList={view === "list"}
                />

                {/* Content */}
                
                <div className="p-6 flex-1 flex flex-col bg-stone-800">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold tracking-widest uppercase text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold py-2 tracking-tight text-amber-600 group-hover:text-amber-500 transition-colors">
                    {p.title}
                  </h3>

                  {/* Subtitle / name */}
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-100  mb-2">
                    {p.name}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 font-light flex-1">
                    {p.desc}
                  </p>

                 
                </div>
                </Link>
                 {/* Links */}
                  <div className="flex gap-5 pt-4 border-t bg-stone-800 items-center justify-center p-3 border-stone-100">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold tracking-widest uppercase text-amber-600 hover:opacity-70 transition-opacity flex items-center gap-1"
                    >
                      Live Demo
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 8L8 2M8 2H4M8 2v4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}