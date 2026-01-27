import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  TestTube,
  FileCheck,
  Smartphone,
  Bug,
  ShieldCheck,
} from "lucide-react";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skills = [
    { name: "Manual Testing", icon: TestTube, level: 90 },
    { name: "Regression Testing", icon: ShieldCheck, level: 85 },
    { name: "Test Case Writing", icon: FileCheck, level: 88 },
    { name: "Bug Reporting", icon: Bug, level: 90 },
    { name: "API Testing Basics", icon: Code, level: 70 },
    { name: "Mobile Testing", icon: Smartphone, level: 75 },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#05070C] overflow-hidden
                 pt-4 pb-10 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14 scroll-mt-[90px]"
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

      {/* Green glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-36 h-[460px] w-[460px] rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] -right-44 h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-green-400/80" />
            <span className="text-white/35 text-xs tracking-[0.45em] uppercase">
              SKILLS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            Tools & strengths I use{" "}
            <span className="text-white/55">to ensure quality.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            A quick overview of my QA skillset — focused on stability, clear
            reporting, and release confidence.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition
                           hover:border-green-400/30 hover:bg-white/[0.07]
                           shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                {/* top row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                      <Icon className="text-green-400" size={20} />
                    </div>

                    <div>
                      <p className="text-white font-semibold">{skill.name}</p>
                      <p className="text-white/45 text-xs mt-0.5">
                        Proficiency
                      </p>
                    </div>
                  </div>

                  <p className="text-white/55 text-sm font-semibold">
                    {skill.level}%
                  </p>
                </div>

                {/* progress bar */}
                <div className="mt-6">
                  <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-lime-400"
                    />
                  </div>

                  {/* tiny underline accent */}
                  <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-green-400/70 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
