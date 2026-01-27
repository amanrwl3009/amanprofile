// src/App.jsx
import React from 'react';

import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main>
        <section id="home" className="min-h-screen snap-start">
          <Hero />
        </section>

        <section id="about" className="min-h-screen md:min-h-[80vh] snap-start">
          <About />
        </section>

        <section id="skills" className="min-h-screen md:min-h-[80vh] snap-start">
          <Skills />
        </section>

        <section id="contact" className="min-h-screen md:min-h-[80vh] snap-start">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;