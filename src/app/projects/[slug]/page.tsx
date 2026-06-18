"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  // Github,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DiGithub } from "react-icons/di";

const project = {
  title: "Eland",
  subtitle: "AI-powered platform for land analysis and reporting",

  live: "https://eland-one.vercel.app/",
  github: "https://github.com/Apur0y/e-land-frontend",

  images: [
    "/l1.png",
    "/l2.png",
    "/l3.png",
    "/l4.png",
    "/l5.png",
  ],

  overview:
    "Eland is an AI-powered land intelligence platform that helps investors analyze properties, generate detailed investment reports, assess risks, and predict future land values.",

  problem:
    "Land investors often struggle to gather reliable data, understand investment risks, and forecast long-term land appreciation accurately.",

  solution:
    "Eland combines AI-driven analytics, report generation, and investment forecasting into one unified platform, allowing users to make informed decisions faster.",

  features: [
    "AI Land Analysis",
    "Investment Report Generation",
    "5-Year Price Prediction",
    "Risk Assessment",
    "Stripe Payments",
    "Dashboard Analytics",
  ],

  technical: [
    "Next.js App Router",
    "Redux Toolkit Query",
    "Stripe Payment Gateway",
    "JWT Authentication",
    "Zod Validation",
    "jsPDF Report Generation",
  ],

  challenges: [
    {
      title: "Large PDF Generation",
      solution:
        "Implemented optimized jsPDF rendering and asynchronous processing.",
    },
    {
      title: "Complex API State Management",
      solution:
        "Utilized RTK Query caching and invalidation strategies.",
    },
    {
      title: "Secure Authentication",
      solution:
        "JWT access tokens with protected routes and middleware.",
    },
  ],

  impact: [
    "Automated investment analysis",
    "Reduced manual research effort",
    "Improved decision making",
    "Scalable architecture",
  ],

  stack: [
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "Stripe",
    "Tailwind",
    "JWT",
    "Zod",
    "jsPDF",
  ],
};

export default function ProjectDetails() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-stone-950 text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[140px]" />
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-stone-900/80 backdrop-blur hover:border-amber-500 transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-amber-500 text-sm mb-4">
            Featured Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border border-stone-700 rounded-full hover:border-amber-500 transition"
            >
              <DiGithub size={18} />
              Source Code
            </Link>
          </div>
        </motion.section>

        {/* Gallery */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-10">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="relative overflow-hidden rounded-3xl border border-stone-800"
              >
                <Image
                  src={img}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <Section title="Overview">
          {project.overview}
        </Section>

        {/* Problem */}
        <Section title="Problem">
          {project.problem}
        </Section>

        {/* Solution */}
        <Section title="Solution">
          {project.solution}
        </Section>

        {/* Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {project.features.map((feature) => (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                key={feature}
                className="p-6 rounded-2xl border border-stone-800 bg-stone-900"
              >
                <CheckCircle
                  className="text-amber-500 mb-4"
                  size={22}
                />
                <h3 className="font-medium">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Technical Highlights
          </h2>

          <div className="space-y-4">
            {project.technical.map((item) => (
              <div
                key={item}
                className="border-l-2 border-amber-500 pl-4 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Challenges & Solutions
          </h2>

          <div className="space-y-6">
            {project.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="border border-stone-800 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-xl mb-3">
                  {challenge.title}
                </h3>

                <p className="text-gray-400">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <motion.span
                whileHover={{
                  scale: 1.08,
                }}
                key={tech}
                className="px-4 py-2 rounded-full bg-stone-900 border border-stone-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Project Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {project.impact.map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-stone-900 border border-stone-800"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Nav */}
        <div className="border-t border-stone-800 pt-10 flex justify-between">
          <button className="text-gray-400 hover:text-amber-500 transition">
            ← Previous Project
          </button>

          <button className="text-gray-400 hover:text-amber-500 transition">
            Next Project →
          </button>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-8">
        {title}
      </h2>

      <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
        {children}
      </p>
    </motion.section>
  );
}