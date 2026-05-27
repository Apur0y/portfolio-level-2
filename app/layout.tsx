import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Apu Roy — Full Stack Developer",
  description:
    "Portfolio of Apu Roy, a Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Apu Roy"],
  openGraph: {
    title: "Apu Roy — Full Stack Developer",
    description: "Building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://i.ibb.co.com/zZ0CWvk/Portfolio-icon1.png"
      />
      <SmoothScroll>
        <body className="bg-white text-gray-900 antialiased">{children}</body>
      </SmoothScroll>
    </html>
  );
}
