"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import ValuesSection from "../components/ValuesSection";
import Timeline from "../components/Timeline";
import Facts from "../components/Facts";
import Image from "next/image";
import RestaurantsSection from "../components/RestaurantsSection";

// Reusable animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Om <span className="text-yellow-400">QSC</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Mer än bara en kedja – ett bolag med hjärta, ansvar och driv
            </h2>
          </div>
        </div>
      </motion.section>

      <div className="w-1/2 right-0 absolute">
        <Image
          src="/Vector.svg"
          alt="Wave divider"
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <Timeline />

      {/* Award Section */}
      <motion.section
        className="w-full bg-gradient-to-b from-white via-yellow-50 to-white py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              className="relative"
              variants={sectionVariants}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/9.jpg')" }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 md:w-40 md:h-40 rounded-full bg-yellow-300/20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 md:w-32 md:h-32 rounded-full bg-orange-400/10 blur-xl"></div>
            </motion.div>

            {/* Text side */}
            <motion.div
              className="text-center md:text-left"
              variants={sectionVariants}
            >
              <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide shadow inline-block mb-4">
                🏆 Latest Award
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                <span className="text-gray-900">Outstanding Restaurang</span>{" "}
                <br />
                <span className="text-yellow-500">2024</span>
              </h2>
              <p className="mt-4 text-2xl font-semibold text-gray-800">
                McDonald's <span className="text-yellow-400">Bydalen, Sundsvall</span>
              </p>
              <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                Ett erkännande för högsta kvalitet, gästfrihet och engagemang i att
                skapa minnesvärda upplevelser för våra gäster. Vi är stolta över att
                ta emot denna utmärkelse och fortsätta driva utvecklingen framåt.
              </p>
              <div className="mt-8">
                <a
                  href="/ledningsgrupp"
                  className="inline-block bg-yellow-500 hover:bg-[#e6a526] text-white px-2 py-2 md:px-4 md:py-3 rounded-lg font-medium text-lg shadow-md hover:opacity-90 transition transform hover:scale-105"
                >
                  Läs mer om vår ledningsgrupp →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Reklamsektion */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Historiska<span className="text-[#F0AE2C]"> reklamfavoriter</span>{" "}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              En tillbakablick på klassiska reklamfilmer från McDonald’s Sverige
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                href: "https://youtu.be/cTVhZqNwn3Y",
                img: "https://img.youtube.com/vi/cTVhZqNwn3Y/hqdefault.jpg",
                title: "McDonald's reklam – 1993",
              },
              {
                href: "https://youtu.be/I94g97bFngM",
                img: "https://img.youtube.com/vi/I94g97bFngM/hqdefault.jpg",
                title: "El Maco – 1999",
              },
              {
                href: "https://youtu.be/S1TnWkqjnzU",
                img: "https://img.youtube.com/vi/S1TnWkqjnzU/hqdefault.jpg",
                title: "Livet har sina goda stunder",
              },
            ].map((video, i) => (
              <motion.a
                key={i}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                variants={sectionVariants}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={video.img}
                    alt={video.title}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-lg font-semibold text-center">
                  {video.title}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      <RestaurantsSection />

      <Facts />
    </div>
  );
};

export default Page;
