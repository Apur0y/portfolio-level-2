"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Eland",
    name: "AI-powered platform for land analysis and reporting.",
    desc: "To solve this, I built Eland — an AI-powered land analysis platform. Full investment report, 5-year price prediction, risk assessment — all in one place.",
    tags: ["Next.js", "TypeScript", "Redux RTK Query", "Stripe", "Jspdf", "Zod", "Tailwind", "JWT"],
    live: "https://eland-one.vercel.app/",
    github: "https://github.com/Apur0y/e-land-frontend",
    images: ["/l1.png", "/l2.png", "/l3.png", "/l4.png", "/l5.png"],
    accent: "from-stone-100 to-amber-50",
  },
  {
    num: "02",
    title: "Career Path",
    name: "Job Searching and Employment Platform",
    desc: "Career Path is a job searching platform developed as a team project under my leadership. Features a subscription-based payment system, dashboards for Admins and Employers, with full control over jobs and users.",
    tags: ["Next.js", "TypeScript", "Redux RTK Query", "Stripe", "Zod", "Tailwind", "JWT"],
    live: "https://career-path-pearl.vercel.app/",
    github: "https://github.com/Apur0y/career-path-frontend",
    images: ["/c1.png", "/c3.png", "/c2.png", "/c5.png", "/c4.png"],
    accent: "from-amber-50 to-stone-100",
  },
  {
    num: "03",
    title: "EzyTicket",
    name: "Ticket Booking Platform for Bus, Movies & Events",
    desc: "Ezy Ticket is a collaborative ticket booking platform to streamline the ticket reservation process for bus, movies, and events.",
    tags: ["React.js", "Tailwind", "Node.js", "MongoDB", "Redux", "sslcommerz", "Firebase", "JWT"],
    live: "https://ezy-ticket.vercel.app/",
    github: "https://github.com/Apur0y/edu-quest-client-side",
    images: ["/t3.png", "/t2.png", "/t1.png", "/t4.png", "/t5.png"],
    accent: "from-stone-100 to-yellow-50",
  },
  {
    num: "04",
    title: "Edu Quest",
    name: "Education Platform for Students & Tutors",
    desc: "Edu Quest is a React-based online teaching platform that connects students and tutors with role-based access, Firebase auth, and secure JWT authorization.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT", "Axios"],
    live: "https://edu-quest-aa2b3.web.app/",
    github: "https://github.com/Apur0y/edu-quest-client-side",
    images: ["/e3.png", "/e2.png", "/e1.png"],
    accent: "from-yellow-50 to-stone-100",
  },
  {
    num: "05",
    title: "Game Critique",
    name: "Explore Trending Game and Review Platform",
    desc: "Game Critique is a web application where gamers can post, explore, and discuss game reviews with dynamic user-generated content and secure authentication.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT", "Axios"],
    live: "https://aquamarine-custard-8f7ba5.netlify.app/",
    github: "https://github.com/Apur0y/game-critique-client-side",
    images: ["/m5.png", "/m6.png", "/m7.png", "/m8.png"],
    accent: "from-stone-100 to-amber-50",
  },
  {
    num: "06",
    title: "Volunteer Port",
    name: "Join Volunteer Opportunities Platform",
    desc: "Volunteer Port is a platform where users can find and post volunteer opportunities, with secure auth, event management, and an engaging community-focused UI.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT", "Axios"],
    live: "https://volunteer-port.web.app/",
    github: "https://github.com/Apur0y/volunteer-port-client-site",
    images: ["/vol1.jpg", "/vol2.jpg", "/vol3.jpg", "/vol4.jpg"],
    accent: "from-amber-50 to-yellow-50",
  },
];

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
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
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
                {/* Image slideshow */}
                <ProjectImage
                  images={p.images}
                  title={p.title}
                  accent={p.accent}
                  isList={view === "list"}
                />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
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
                  <h3 className="font-serif text-xl tracking-tight text-gray-900 group-hover:text-amber-600 transition-colors">
                    {p.title}
                  </h3>

                  {/* Subtitle / name */}
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 mb-2">
                    {p.name}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 font-light flex-1">
                    {p.desc}
                  </p>

                  {/* Links */}
                  <div className="flex gap-5 pt-4 border-t border-stone-100">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}