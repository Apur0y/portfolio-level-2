"use client";

// ── Skill data ──────────────────────────────────────────────────────────────

const frontendSkills = [
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Redux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "RTK Query",   emoji: "⚡" },
  { name: "Tailwind CSS",icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "React Router",emoji: "🔀" },
];

const backendSkills = [
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST API",   emoji: "🔗" },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "JWT",        emoji: "🔑" },
  { name: "Socket.io",  emoji: "🔌" },
];

const toolsSkills = [
  { name: "Git",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel",   emoji: "🚀" },
  { name: "Netlify",  emoji: "🌐" },
  { name: "Postman",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const otherSkills = [
  { name: "Zod",    emoji: "🛡️" },
  { name: "Stripe", emoji: "💳" },
  { name: "jsPDF",  emoji: "📄" },
];

// ── Update these with your real handles ─────────────────────────────────────
const LEETCODE_URL    = "https://leetcode.com/u/ApuRoy/";
const LEETCODE_HANDLE = "leetcode.com/u/yourhandle";
const LEETCODE_SOLVED = "";

const CF_URL    = "https://codeforces.com/profile/apuroy56";
const CF_HANDLE = "codeforces.com/profile/yourhandle";
const CF_RATING = ""; // e.g. "Newbie", "Pupil", "Specialist", "Expert" …

// ── CS Concepts ──────────────────────────────────────────────────────────────
const concepts = [
  { label: "Data Structures & Algorithms", highlight: true },
  { label: "Linked List", highlight: true },
  { label: "Stack & Queue" , highlight: true},
  { label: "Binary Search", highlight: true },
  { label: "Merge Sort", highlight: true },
  { label: "Quick Sort", highlight: true },
  { label: "Bubble Sort" },
  { label: "Selection Sort" },
  { label: "Hash Table", highlight: true },
  { label: "Dynamic Programming", highlight: true },
  { label: "Recursion" },
  { label: "Two Pointers" , highlight: true},
  { label: "Sliding Window" },
  { label: "BFS / DFS" },
  { label: "Tree Traversal" },
  { label: "Greedy" },
  { label: "Backtracking" },
  { label: "Graph Theory" },
  { label: "Big O Notation" },
  { label: "OOP Principles", highlight: true },
];

// ── Sub-components ───────────────────────────────────────────────────────────

type Skill = { name: string; icon?: string; emoji?: string };

function Chip({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 bg-white rounded text-xs font-medium text-stone-600 hover:border-gold hover:text-gold hover:bg-gold-50 transition-all duration-200 cursor-default">
      {skill.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={skill.icon} alt="" className="w-4 h-4 object-contain" />
      ) : (
        <span className="text-sm leading-none">{skill.emoji}</span>
      )}
      {skill.name}
    </span>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-7">
      <h3 className="font-serif italic text-gold-700 text-[15px] mb-3 pb-2.5 border-b border-stone-200">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => <Chip key={s.name} skill={s} />)}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-serif italic text-gold text-sm">02</span>
          <div className="md:w-12 h-px bg-gold opacity-50" />
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Skills & <em className="text-gold">Expertise</em>
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── LEFT: Technical Skills ── */}
          <div>
            <SkillGroup title="Frontend Development" skills={frontendSkills} />
            <SkillGroup title="Backend Development"  skills={backendSkills} />
            <SkillGroup title="Tools & Platforms"    skills={toolsSkills} />
            <SkillGroup title="Libraries & Integrations" skills={otherSkills} />
          </div>

          {/* ── RIGHT: Problem Solving ── */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-2">
              Problem <em className="text-gold">Solving</em>
            </h3>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              Consistent competitive programming practice focused on algorithmic
              thinking and optimal solutions.
            </p>

            {/* Platform cards */}
            <div className="flex flex-col gap-3 mb-8">

              {/* LeetCode */}
              <a
                href={LEETCODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3.5 border border-stone-200 bg-white rounded-md hover:border-gold hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-xl shrink-0">🟡</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-stone-800">LeetCode</div>
                  <div className="font-mono text-[11px] text-gold truncate">{LEETCODE_HANDLE}</div>
                </div>
                <div className="text-right md:shrink-0">
                  <div className="font-mono text-lg font-medium text-stone-800">{LEETCODE_SOLVED}</div>
                  {/* <div className="text-[10px] uppercase tracking-wider text-stone-400">Problems</div> */}
                </div>
                <span className="text-stone-300 group-hover:text-gold text-sm ml-1 transition-colors">↗</span>
              </a>

              {/* Codeforces */}
              <a
                href={CF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3.5 border border-stone-200 bg-white rounded-md hover:border-gold hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-xl shrink-0">🔵</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-stone-800">Codeforces</div>
                  <div className="font-mono text-[11px] text-gold truncate">{CF_HANDLE}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-lg font-medium text-stone-800">{CF_RATING}</div>
                  {/* <div className="text-[10px] uppercase tracking-wider text-stone-400">Rating</div> */}
                </div>
                <span className="text-stone-300 group-hover:text-gold text-sm ml-1 transition-colors">↗</span>
              </a>

            </div>

            {/* CS Concepts */}
            <h4 className="font-serif italic text-gold-700 text-[15px] mb-3 pb-2.5 border-b border-stone-200">
              CS Concepts & Algorithms
            </h4>
            <div className="flex flex-wrap gap-2">
              {concepts.map((c) => (
                <span
                  key={c.label}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium border transition-all duration-200 cursor-default hover:border-gold hover:text-gold ${
                    c.highlight
                      ? "bg-amber-50 border-amber-200 text-amber-800"
                      : "bg-stone-100 border-stone-200 text-stone-600"
                  }`}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}