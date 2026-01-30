import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Work from "./components/work"; // 👈 lowercase (IMPORTANT)

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="home" className="min-h-screen snap-start">
                <Hero />
              </section>

              <section
                id="about"
                className="min-h-screen md:min-h-[80vh] snap-start"
              >
                <About />
              </section>

              <section
                id="skills"
                className="min-h-screen md:min-h-[80vh] snap-start"
              >
                <Skills />
              </section>

              <section
                id="contact"
                className="min-h-screen md:min-h-[80vh] snap-start"
              >
                <Contact />
              </section>
            </main>
          }
        />

        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
