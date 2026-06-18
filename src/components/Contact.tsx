"use client";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

const channels = [
  {
    icon: "✉",
    label: "Email",
    value: "apuroy2785@email.com",
    href: "mailto:apuroy@email.com",
    className:"text-red-700"
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/apu-r0y",
    href: "https://www.linkedin.com/in/apu-r0y/",
    className:"text-blue-600"
  },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/Apur0y", href: "#",  className:"text-white" },
  {
    icon: "☎",
    label: "Phone",
    value: "+880 1786209895",
    href: "tel:+8801786209895",
    className:"text-green-600"
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">06</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Get In <em className="text-gold">Touch</em>
          </h2>
        </div>

        <div className="gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-gray-100 mb-5">
              Let&apos;s build something{" "}
              <em className="text-gold">remarkable</em> together
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8 font-light text-[15px]">
              Have a project in mind, an opportunity to share, or just want to
              connect? My inbox is always open. I typically respond within 24
              hours.
            </p>

            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-stone-800 border border-stone-100 hover:border-gold-200 transition-all duration-200 group"
                >
                  <div className={`w-9 h-9   flex items-center justify-center  text-3xl font-bold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors ${c.className}`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-200 uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-gold transition-colors">
                      {c.value}
                    </p>
                  </div>
                  <svg
                    className="ml-auto text-gray-300 group-hover:text-gold transition-colors"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 11L11 3M11 3H6M11 3v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
