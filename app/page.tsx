import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import HomeExperience from "@/components/HomeExperience";
import HowIWork from "@/components/HowIWork";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main
      id="top"
      className="home-page"
    >
      <HomeExperience>
        {/* ================================================
            01 / IDENTITY
        ================================================= */}

        <div
          data-station-id="identity"
        >
          <Hero />
        </div>

        {/* ================================================
            02 / SELECTED WORK
        ================================================= */}

        <div
          data-station-id="work"
        >
          <div className="site-container">
            <SelectedWork />
          </div>
        </div>

        {/* ================================================
            03 / PROCESS
        ================================================= */}

        <div
          data-station-id="process"
        >
          <div className="site-container">
            <HowIWork />
          </div>
        </div>

        {/* ================================================
            04 / CAPABILITIES
        ================================================= */}

        <div
          data-station-id="capabilities"
        >
          <div className="site-container">
            <Capabilities />
          </div>
        </div>

        {/* ================================================
            05 / ABOUT
        ================================================= */}

        <div
          data-station-id="about"
        >
          <div className="site-container">
            <About />
          </div>
        </div>

        {/* ================================================
            06 / EXPERIENCE
        ================================================= */}

        <div
          data-station-id="experience"
        >
          <div className="site-container">
            <Experience />
          </div>
        </div>

        {/* ================================================
            07 / CONTACT
        ================================================= */}

        <div
          data-station-id="contact"
        >
          <Contact />
        </div>
      </HomeExperience>
    </main>
  );
}