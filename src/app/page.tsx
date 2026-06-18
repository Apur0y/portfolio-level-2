import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="bg-stone-900">
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
