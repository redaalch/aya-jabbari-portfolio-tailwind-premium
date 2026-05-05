import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Hackathons } from "./components/Hackathons";
import { FeaturedProjects } from "./components/sections/FeaturedProjects";
import { MoreProjects } from "./components/sections/MoreProjects";
import { Education } from "./components/sections/Education";
import { Certifications } from "./components/Certifications";
import { LanguagesVolunteering } from "./components/sections/LanguagesVolunteering";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility requirement */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-10 focus:items-center focus:rounded-xl focus:bg-plum-900 focus:px-4 focus:text-[14px] focus:font-semibold focus:text-cream-50 focus:shadow-cta focus:outline-none"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Hackathons />
        <FeaturedProjects />
        <MoreProjects />
        <Education />
        <Certifications />
        <LanguagesVolunteering />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
