import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionMap = {
    Home: "home",
    "About Me": "about",
    Skills: "skills",
    Work: "projects",
    Contact: "contact",
  };

  const menuItems = ["Home", "About Me", "Skills", "Work", "Contact"];

  const scrollToSection = (item) => {
    const targetId = sectionMap[item];
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  // Detect scroll for transparent → solid effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // 80px ke baad change (adjust as needed)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-based active section detection (same as before)
  useEffect(() => {
    const ids = Object.values(sectionMap);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;

        const currentSectionId = visible.target.id;
        const matchedMenuItem = Object.keys(sectionMap).find(
          (key) => sectionMap[key] === currentSectionId
        );

        if (matchedMenuItem) setActiveItem(matchedMenuItem);
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md shadow-lg"
          : "bg-transparent shadow-none"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo - always visible, add slight opacity change if wanted */}
        <div
          className={`text-3xl lg:text-4xl font-bold text-white tracking-tight transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-90"
          }`}
        >
          Aman Rawal
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10">
            {menuItems.map((item) => {
              const isActive = activeItem === item;

              return (
                <li key={item} className="relative">
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`relative font-medium transition-all duration-300 ease-out text-lg group ${
                      isActive
                        ? "text-green-400"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item}

                    {/* Underline with center scale + glow */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2.5px] rounded-full bg-green-400 origin-center transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${
                          isActive
                            ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                            : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-80 group-hover:shadow-[0_0_4px_rgba(34,197,94,0.3)]"
                        }
                      `}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Toggle - white always for visibility */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown - matches header transparency */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`md:hidden border-t border-gray-800/50 overflow-hidden ${
              isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/70 backdrop-blur-sm"
            }`}
          >
            <ul className="flex flex-col space-y-6 px-6 py-8">
              {menuItems.map((item) => {
                const isActive = activeItem === item;

                return (
                  <li key={item} className="relative">
                    <button
                      onClick={() => scrollToSection(item)}
                      className={`relative font-medium text-xl transition-all duration-300 ease-out w-full text-left group ${
                        isActive
                          ? "text-green-400"
                          : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {item}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2.5px] rounded-full bg-green-400 origin-left transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
                          ${
                            isActive
                              ? "scale-x-100 opacity-100 w-20 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                              : "scale-x-0 opacity-0 w-0 group-hover:scale-x-100 group-hover:opacity-70 group-hover:w-12 group-hover:shadow-[0_0_4px_rgba(34,197,94,0.3)]"
                          }
                        `}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;