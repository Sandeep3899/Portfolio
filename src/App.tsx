import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <ChatWidget />
      </main>
      <Footer />
    </div>
  );
}

export default App;
