import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#05070C] px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl text-center"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Sorry
        </h1>

        <p className="mt-4 text-white/60 leading-relaxed">
           Your request could not be completed.
          <br />
          This section of the website is currently under development.
        </p>

        <p className="mt-2 text-white/40 text-sm">
          Please check back again soon.
        </p>
      </motion.div>
    </section>
  );
};

export default Work;
