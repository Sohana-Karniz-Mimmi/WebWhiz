import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Home";
import Portfolio from "@/components/Home/Portfolio/Portfolio";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Services />
    </main>
  );
}
