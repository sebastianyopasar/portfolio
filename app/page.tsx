import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main id="top">
      <div className="site-container">
        <Navbar />
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}