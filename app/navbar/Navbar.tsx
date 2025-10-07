"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link (useful for single-page applications)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo.svg"
            alt="QSC Logo"
            className="h-8 w-auto md:h-10" // Responsive logo sizing
          />
        </a>

        {/* Hamburger Menu Icon (Mobile & iPad) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop - lg breakpoint and above) */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-800 font-medium">
          <a href="/" className="relative group px-2 py-1">
            Hem
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="/jobba-hos-oss" className="relative group px-2 py-1">
            Jobba hos oss
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="/ledningsgrupp" className="relative group px-2 py-1">
            Ledningsgrupp
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="/om-oss" className="relative group px-2 py-1">
            Om oss
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="/ronald-mcdonald-barnfond"
            className="relative group px-2 py-1"
          >
            Ronald McDonald Barnfond
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a href="/kontakta-oss" className="relative group px-2 py-1">
            Kontakta oss
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
        </nav>

     {/* Button (Desktop - lg breakpoint and above) */}
<a
  href="/vara-medarbetare"
  className="hidden lg:inline-flex flex-col items-center justify-center bg-yellow-400 text-black px-5 py-2.5 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-200 leading-tight"
>
  <span>Logga in</span>
  <span className="text-xs font-normal">(anställda)</span>
</a>
      </div>

      {/* Mobile & iPad Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg mt-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-4 p-6 text-gray-800 font-medium">
            <a href="/" className="relative group py-2" onClick={closeMenu}>
              Hem
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/jobba-hos-oss"
              className="relative group py-2"
              onClick={closeMenu}
            >
              Jobba hos oss
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/ledningsgrupp"
              className="relative group py-2"
              onClick={closeMenu}
            >
              Ledningsgrupp
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/om-oss"
              className="relative group py-2"
              onClick={closeMenu}
            >
              Om oss
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/ronald-mcdonald-barnfond"
              className="relative group py-2"
              onClick={closeMenu}
            >
              Ronald McDonald Barnfond
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/kontakta-oss"
              className="relative group py-2"
              onClick={closeMenu}
            >
              Kontakta oss
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          <a
  href="/vara-medarbetare"
  onClick={closeMenu}
  className="bg-yellow-400 text-black px-4 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-200 mt-2 flex flex-col items-center justify-center leading-tight text-center"
>
  <span>Logga in</span>
  <span className="text-xs font-normal">(anställda)</span>
</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
