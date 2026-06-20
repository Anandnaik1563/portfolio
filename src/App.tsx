import { Navbar } from "./Components/Portfolio/Navbar";
import { Hero } from "./Components/Portfolio/Hero";
import { About } from "./Components/Portfolio/About";
import { Skills } from "./Components/Portfolio/Skills";
import { Projects } from "./Components/Portfolio/Projects";
import { Education } from "./Components/Portfolio/Education";
import { Contact } from "./Components/Portfolio/Contact";
import { Footer } from "./Components/Portfolio/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;