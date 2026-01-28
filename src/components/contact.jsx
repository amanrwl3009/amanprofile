import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const maxLength = 2000;
  const remaining = maxLength - message.length;

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

  return (
    <section
      id="contact"
      className="relative bg-[#05070C] min-h-screen flex items-center overflow-hidden py-10 md:py-12 scroll-mt-28"
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
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-36 h-[420px] w-[420px] -full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] -right-44 h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-green-400/80" />
            <span className="text-white/35 text-xs tracking-[0.45em] uppercase">
              CONTACT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            Let’s work together{" "}
            <span className="text-white/55">and ship confidently.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            Open to QA roles, freelance projects, or a quick discussion about quality.
          </motion.p>

          {/* Main grid */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 ">
            {/* LEFT: Info */}
            <motion.div variants={fadeLeft} className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="space-y-4 text-white/70">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                      <Phone size={18} className="text-green-400" />
                    </div>
                    <span className="text-sm md:text-base">+91 9350120019</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                      <Mail size={18} className="text-green-400" />
                    </div>
                    <span className="text-sm md:text-base">
                      amanrawal358@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                      <MapPin size={18} className="text-green-400" />
                    </div>
                    <span className="text-sm md:text-base"> Panipat Haryana </span>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-7">
                  <p className="text-white/40 text-xs tracking-[0.22em] uppercase">
                    Socials
                  </p>

                  <div className="mt-3 flex gap-3">
                    <a
                      href="https://www.instagram.com/aman_rwl_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-green-400/30 hover:bg-white/10 transition"
                    >
                      <Instagram size={18} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/amanrawal3009/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-green-400/30 hover:bg-white/10 transition"
                    >
                      <Linkedin size={18} />
                    </a>

                    <a
                      href="https://github.com/amanrwl3009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-green-400/30 hover:bg-white/10 transition"
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-green-400/70 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div variants={fadeRight} className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/55 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none
                                 focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/55 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none
                                 focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-white/55 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) =>
                        e.target.value.length <= maxLength &&
                        setMessage(e.target.value)
                      }
                      maxLength={maxLength}
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/30 outline-none resize-none
                                 focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition"
                      placeholder="How can I help you today?"
                    />
                    <div className="mt-2 text-right text-xs text-white/35">
                      {remaining} characters remaining
                    </div>
                  </div>

                  <div className="md:col-span-2 flex items-center gap-3">
                    <button type="button" className="btn-uiverse btn-uiverse--primary">
                      <span>Submit</span>
                    </button>

                    <p className="text-white/35 text-sm">
                      Usually replies within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
