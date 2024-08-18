import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <div className="mt-3">
        <About />
      </div>
    </main>
  );
}
