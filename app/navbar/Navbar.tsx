"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"}
      py-3 lg:py-1`}   // ← STÖRRE HÖJD MOBIL
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo – större på mobil */}
        <a href="/">
          <img
            src="/logo.svg"
            alt="QSC Logo"
            className="h-7 w-auto md:h-6"   // ← STÖRRE PÅ MOBIL
          />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}  {/* ← STÖRRE ICON */}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex space-x-3 xl:space-x-4 text-gray-800 font-medium text-xs">
          <a href="/" className="relative group px-1.5 py-0.5">Hem</a>
          <a href="/om-oss" className="relative group px-1.5 py-0.5">Resan hit</a>
          <a href="/jobba-hos-oss" className="relative group px-1.5 py-0.5">Karriär hos oss</a>
          <a href="/ledningsgrupp" className="relative group px-1.5 py-0.5">Ledningsgruppen</a>
          <a href="/ronald-mcdonald-barnfond" className="relative group px-1.5 py-0.5">Ronald McDonald Barnfond</a>
          <a href="/kontakta-oss" className="relative group px-1.5 py-0.5">Kontakta oss</a>
        </nav>

        {/* Desktop login button */}
        <a
          href="/vara-medarbetare"
          className="hidden lg:flex flex-col items-center bg-yellow-400 text-black px-3 py-1 rounded-md text-xs font-medium hover:bg-yellow-500 transition"
        >
          <span>Logga in</span>
          <span className="text-[10px]">(anställda)</span>
        </a>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg mt-2 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3 p-4 text-gray-800 font-medium text-base">
            <a href="/" onClick={closeMenu}>Hem</a>
            <a href="/om-oss" onClick={closeMenu}>Resan hit</a>
            <a href="/jobba-hos-oss" onClick={closeMenu}>Karriär hos oss</a>
            <a href="/ledningsgrupp" onClick={closeMenu}>Ledningsgruppen</a>
            <a href="/ronald-mcdonald-barnfond" onClick={closeMenu}>Ronald McDonald Barnfond</a>
            <a href="/kontakta-oss" onClick={closeMenu}>Kontakta oss</a>

            <a
              href="/vara-medarbetare"
              onClick={closeMenu}
              className="bg-yellow-400 px-4 py-2 rounded text-center font-semibold text-base"
            >
              Logga in (anställda)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
