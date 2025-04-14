import About from "@/components/Home/About/About";
import Blog from "@/components/Home/Blog/Blog";
import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import Contact from "@/components/Home/Contact/Contact";
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
      {/* <ClientReviews /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
