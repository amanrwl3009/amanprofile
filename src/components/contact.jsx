import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, MessageCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
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

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setErrors({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateField = (field) => {
    let error = "";
    if (field === "name" || field === "all") {
      if (!name.trim()) error = "Please enter your full name.";
      setErrors((prev) => ({ ...prev, name: error }));
    }
    if (field === "email" || field === "all") {
      if (!email.trim()) error = "Please enter your email address.";
      else if (!/\S+@\S+\.\S+/.test(email)) error = "Please enter a valid email address.";
      setErrors((prev) => ({ ...prev, email: error }));
    }
    if (field === "message" || field === "all") {
      if (!message.trim()) error = "Please enter your message.";
      setErrors((prev) => ({ ...prev, message: error }));
    }
  };

  const handleSubmit = (e) => {
    validateField("all");
    if (Object.values(errors).some((err) => err !== "")) {
      e.preventDefault();
    }
  };

  const autofillStyles =
    " [:-webkit-autofill]:[box-shadow:0_0_0_30px_rgba(0,0,0,0.2)_inset_!important] [:-webkit-autofill]:[-webkit-text-fill-color:white_!important] [:-webkit-autofill]:[background-color:transparent_!important] [:-webkit-autofill:hover]:[box-shadow:0_0_0_30px_rgba(0,0,0,0.2)_inset_!important] [:-webkit-autofill:hover]:[-webkit-text-fill-color:white_!important] [:-webkit-autofill:hover]:[background-color:transparent_!important] [:-webkit-autofill:focus]:[box-shadow:0_0_0_30px_rgba(0,0,0,0.2)_inset_!important] [:-webkit-autofill:focus]:[-webkit-text-fill-color:white_!important] [:-webkit-autofill:focus]:[background-color:transparent_!important]";

  return (
    <section
      id="contact"
      className="relative bg-[#05070C] min-h-screen flex items-center overflow-hidden py-10 md:py-12 scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-36 h-[420px] w-[420px] -full bg-lime-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] -right-44 h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-green-400/80" />
            <span className="text-white/35 text-xs tracking-[0.45em] uppercase">
              CONTACT
            </span>
          </motion.div>

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

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <motion.div variants={fadeLeft} className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
               <div className="mt-4 translate-y-[-11px]">
                  <p className="text-white/40 text-base tracking-[0.22em] uppercase mb-0">
                    Socials
                  </p>
                  <div className="mt-3 flex flex-col gap-5">
                    <a
                      href="https://www.instagram.com/aman_rwl_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full flex items-center gap-3 px-4 text-white/70 hover:text-green-600 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <Instagram size={18} />
                      </div>
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amanrawal3009/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full flex items-center gap-3 px-4 text-white/70 hover:text-green-600 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <Linkedin size={18} />
                      </div>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/amanrwl3009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full flex items-center gap-3 px-4 text-white/70 hover:text-green-600 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <Github size={18} />
                      </div>
                      GitHub
                    </a>
                    <a
                      href="https://wa.me/919350120019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-full flex items-center gap-3 px-4 text-white/70 hover:text-green-600 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <MessageCircle size={18} />
                      </div>
                      WhatsApp
                    </a>
                  </div>
                  <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-green-400/70 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <form
                  ref={formRef}
                  action="https://formspree.io/f/xlgnbnzp"
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm text-white/55 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      onBlur={() => validateField("name")}
                      className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-white/30 outline-none focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition ${
                        errors.name ? "border-red-400/40" : "border-white/10"
                      } bg-black/20${autofillStyles}`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-400">
                        <AlertCircle size={14} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-white/55 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      onBlur={() => validateField("email")}
                      className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-white/30 outline-none focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition ${
                        errors.email ? "border-red-400/40" : "border-white/10"
                      } bg-black/20${autofillStyles}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-400">
                        <AlertCircle size={14} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-white/55 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => {
                        if (e.target.value.length <= maxLength) {
                          setMessage(e.target.value);
                          setErrors((prev) => ({ ...prev, message: "" }));
                        }
                      }}
                      onBlur={() => validateField("message")}
                      className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-white/30 outline-none resize-none focus:border-green-400/40 focus:ring-2 focus:ring-green-400/10 transition ${
                        errors.message ? "border-red-400/40" : "border-white/10"
                      } bg-black/20${autofillStyles}`}
                      placeholder="How can I help you today?"
                    />
                    {errors.message && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-400">
                        <AlertCircle size={14} />
                        {errors.message}
                      </div>
                    )}
                    <div className="mt-2 text-right text-xs text-white/35">
                      {remaining} characters remaining
                    </div>
                  </div>

                  <div className="md:col-span-2 flex items-center gap-3">
                    <button type="submit" className="btn-uiverse btn-uiverse--primary">
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
