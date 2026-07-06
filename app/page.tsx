import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="bg-neutral-950">
        <MainBanner/>
        {/* bg-gradient-to-tl from-orange-200 to-gray-300 */}
        {/* <Banner/> */}
        {/* <Hero /> */}
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
