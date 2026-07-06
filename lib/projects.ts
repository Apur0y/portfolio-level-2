export type Project = {
  num: string;
  title: string;
  name: string;
  desc: string;
  tags: string[];
  live: string;
  github: string;
  images: string[];
  accent: string;
  slug: string;
};

export const projects: Project[] = [
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
    slug: "eland",
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
    slug: "career-path",
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
    slug: "ezyticket",
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
    slug: "edu-quest",
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
    slug: "game-critique",
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
    slug: "volunteer-port",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
