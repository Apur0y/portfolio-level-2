"use client";
import { useEffect, useRef, useState } from "react";

const channels = [
  {
    icon: "✉",
    label: "Email",
    value: "apuroy2785@email.com",
    href: "mailto:apuroy@email.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/apu-r0y",
    href: "https://www.linkedin.com/in/apu-r0y/",
  },
  { icon: "GH", label: "GitHub", value: "github.com/Apur0y", href: "#" },
  {
    icon: "☎",
    label: "Phone",
    value: "+880 1786209895",
    href: "tel:+8801786209895",
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
    <section id="contact" className="py-24 " ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">06</span>
          <div className="w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Get In <em className="text-gold">Touch</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-gray-900 mb-5">
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
                  className="flex items-center gap-4 p-4 bg-white border border-stone-100 hover:border-gold-200 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 bg-gold-50 border border-gold-100 flex items-center justify-center text-gold text-xs font-bold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-gold transition-colors">
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

          {/* Form */}
          <form
            className="reveal space-y-4"
            style={{ transitionDelay: "100ms" }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white border border-stone-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-white border border-stone-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white border border-stone-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="bg-white border border-stone-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="bg-white border border-stone-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 resize-none"
              />
            </div>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/apu-r0y/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className={`w-full py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                sent
                  ? "bg-green-500 text-white"
                  : "bg-gold text-white hover:bg-gold-600 shadow-gold-sm"
              }`}
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
