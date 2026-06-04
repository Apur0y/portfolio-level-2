import { notFound } from "next/navigation";
import  tutorials  from "@/public/blog_data.json";
import TutorialContent from "@/components/blog/BlogContent";

export const getTutorials = () => tutorials;

export const getTutorialBySlug = (slug: string) => {
  return tutorials.find((item) => item.slug === slug);
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <TutorialContent tutorial={tutorial} />
  );
}