import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Technologies />
    </main>
  );
}
