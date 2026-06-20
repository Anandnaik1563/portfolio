import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/Components/Portfolio/Navbar";
import { Hero } from "@/Components/Portfolio/Hero";
import { About } from "@/Components/Portfolio/About";
import { Skills } from "@/Components/Portfolio/Skills";
import { Projects } from "@/Components/Portfolio/Projects";
import { Education } from "@/Components/Portfolio/Education";
import { Contact } from "@/Components/Portfolio/Contact";
import { Footer } from "@/Components/Portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Degavath Anand Nayak — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Degavath Anand Nayak — Full Stack Developer specializing in Java, Spring Boot, React, and Node.js. Building the future with code.",
      },
      { property: "og:title", content: "Degavath Anand Nayak — Full Stack Developer" },
      {
        property: "og:description",
        content: "Full Stack Developer portfolio · Java · React · Spring Boot · Node.js",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
