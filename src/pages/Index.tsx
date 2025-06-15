
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Research } from "@/components/Research";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-green-100/70 to-emerald-50/80">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Contact />
    </div>
  );
};

export default Index;
