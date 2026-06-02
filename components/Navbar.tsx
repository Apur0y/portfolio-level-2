"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [isVisible, setIsVisible] = useState(true);
  const [hasGlass, setHasGlass] = useState(false);

  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      const feature = document.querySelector("#featured");

      if (feature) {
        const rect = feature.getBoundingClientRect();
        const isInside = rect.top <= 0 && rect.bottom > 0;

        if (isInside) {
          setIsVisible(false);
          lastScrollY.current = currentScrollY;
          return;
        }
      }

      if (currentScrollY > 30) {
        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > 100
        ) {
          // scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // scrolling up
          setIsVisible(true);
          setHasGlass(true);
        }
      } else {
        setIsVisible(true);
        setHasGlass(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5, // 50% visible
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -100,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [isVisible]);

  console.log("actice",activeSection);
  return (
    <nav
      ref={navRef}
      className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${
        hasGlass
          ? ""
          : scrolled
          ? ""
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Desktop nav */}
         <ul className="hidden md:flex items-center justify-center gap-8 w-full">
          <div className="border flex items-center justify-center gap-8 px-8 py-2 rounded-full bg-white/20 backdrop-blur-2xl">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`nav-link text-white ${activeSection === l.label.toLowerCase() ? "text-gold" : ""}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </div>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-stone-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 hover:text-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block border border-gold text-gold text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-gold hover:text-white transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
