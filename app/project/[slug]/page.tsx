import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-10 lg:px-12">
        <Link
          href="/"
          className="w-fit text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 transition hover:text-amber-400"
        >
          ← Back to Home
        </Link>

        <section className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900 shadow-2xl">
          <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
                  {project.num}
                </p>
                <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h1>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                  {project.name}
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-stone-300">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-200/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone-700 px-5 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-amber-400 hover:text-amber-400"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-800 to-stone-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
