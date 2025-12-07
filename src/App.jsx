import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contributions from "./components/Contributions";
import Connect from "./components/Connect";

// import Hustle from "./components/Hustle";
Contributions

export default function App() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Left side fixed column */}
        <Hero />

        {/* Right side */}
        <div className="flex-1 space-y-20">
          <About />
          <Skills />
          <Experience />
          <Contributions/>
          <Connect />
          {/* <Hustle /> */}
        </div>
      </div>
    </main>
  );
}
