export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl italic text-gold font-semibold">Apu Roy.</span>
        <p className="text-xs text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Apu Roy — Full Stack Developer
        </p>
        <nav className="flex gap-6">
          {["Work", "Skills", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] text-gray-400 hover:text-gold transition-colors tracking-widest uppercase"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
