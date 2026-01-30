
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const HEADER_OFFSET = 96;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();

  const sectionMap = {
    Home: "home",
    "About Me": "about",
    Skills: "skills",
    Contact: "contact",
  };

  const menuItems = ["Home", "About Me", "Skills", "Work", "Contact"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleMenuClick = (item) => {
    if (item === "Work") {
      navigate("/work");
      setActiveItem("Work");
      setIsMenuOpen(false);
      return;
    }

    const sectionId = sectionMap[item];

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }

    setActiveItem(item);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/work") {
      setActiveItem("Work");
    } else {
      setActiveItem("Home");
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <div
          className="text-3xl lg:text-4xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Aman Rawal
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <li key={item} className="group">
              <button
                onClick={() => handleMenuClick(item)}
                className="relative font-medium text-lg text-gray-200 hover:text-white transition"
              >
                {item}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300
                    ${
                      activeItem === item
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-8 space-y-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`text-xl w-full text-left transition ${
                      activeItem === item
                        ? "text-green-400"
                        : "text-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
