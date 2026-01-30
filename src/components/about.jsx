import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -22 },
    show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 22 },
    show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  const cards = [
    {
      tag: "WHAT I DO",
      title: "End-to-End Testing",
      desc: "I test core flows, edge cases, and release stability before production.",
    },
    {
      tag: "HOW I WORK",
      title: "Structured Testing & Defect Tracking",
      desc: "I write detailed test cases and manage bugs in Asana with clear severity, priority, and proof.",
    },
    {
      tag: "CURRENTLY IMPROVING",
      title: "API Testing (Postman)",
      desc: "Postman + REST validation to strengthen overall QA coverage.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#05070C] min-h-screen flex items-center overflow-hidden py-8 md:py-14 lg:py-16 scroll-mt-[95px]"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-green-400/12 blur-3xl" />
        <div className="absolute top-1/3 -left-36 h-[460px] w-[460px] rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] -right-44 h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-white/40 text-xs tracking-[0.35em] uppercase flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-gradient-to-r from-green-400/80 to-transparent" />
            ABOUT
          </motion.p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT */}
            <motion.div variants={fadeLeft} className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                <span className="block leading-none">
                  <span className="block">
                    QA Engineer <span className="text-white/55">at</span>
                  </span>
                  <span className="block text-white">Techwits IT Solutions</span>
                  <span className="block text-white/55 text-3xl md:text-5xl">
                    a DPIIT-approved company.
                  </span>
                </span>
              </h2>

              <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl">
                I’m Aman Rawal, a QA Engineer at Techwits IT Solutions with 6 months
                of experience testing live web and mobile products. I’ve supported
                35+ releases across Android, iOS, Web, and Admin portals, focusing
                on smoke/regression testing, UI/UX validation, API testing
                (Postman), and defect tracking in Asana.
              </p>

              <p className="mt-4 text-white/50 leading-relaxed max-w-2xl">
                I write test cases, execute regression cycles, and ensure critical
                user flows work perfectly before production.
              </p>

              {/* Buttons REMOVED safely */}
              {false && (
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#work" className="btn-uiverse btn-uiverse--primary">
                    <span>View Work</span>
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center min-w-[220px] px-7 py-[15px] rounded-2xl border border-white/12 bg-white/5 text-white font-extrabold text-[14px] uppercase tracking-[0.09em] backdrop-blur-xl hover:bg-white/10 transition"
                  >
                    Contact
                  </a>
                </div>
              )}
            </motion.div>

            {/* RIGHT */}
            <motion.div variants={fadeRight} className="lg:col-span-5">
              <div className="space-y-5">
                {cards.map((c) => (
                  <motion.div
                    key={c.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition
                               hover:border-green-400/30 hover:bg-white/[0.07]
                               shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  >
                    <p className="text-white/35 text-[11px] tracking-[0.22em] uppercase">
                      {c.tag}
                    </p>
                    <p className="mt-2 text-white text-base font-semibold">
                      {c.title}
                    </p>
                    <p className="mt-2 text-white/55 text-sm leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-green-400/70 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
