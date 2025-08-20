"use client"; 

import React, { useState, useRef, useEffect } from "react";
import EmployeeSection from "./components/EmployeeSection";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

interface Item {
  name: string;
  description: string;
  role: string;
}

export default function Home() {
  // Images for the strip
  const originalImages = [
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/11.jpg",
    "/12.jpg",
    "/14.jpg",
    "/15.jpg",
    "/16.jpg",
    "/17.jpg",
    "/18.jpg",
    "/19.jpg",
    "/20.jpg",
    "/21.jpg",
    "/22.jpg",
    "/23.jpg",
    "/24.jpg",
    "/25.jpg",
  ];

  const [stripImages, setStripImages] = useState<string[]>([]);
  useEffect(() => {
    const shuffled = [...originalImages].sort(() => Math.random() - 0.5);
    setStripImages(shuffled);
  }, []);

  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let animationFrame: number;
    let pos = 0;

    const animate = () => {
      if (!strip) return;
      pos -= 1; // speed
      if (Math.abs(pos) >= strip.scrollWidth / 2) {
        pos = 0;
      }
      strip.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div>
      {/* ---------------- Hero Section ---------------- */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture // 🚫 disables PiP button
          controlsList="nodownload noremoteplayback" // optional: hides PiP & download in some browsers
          poster="/hero-poster.jpg"
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source
            src="https://pub-e2eba5a709ec4c6d95696e1f8e70f140.r2.dev/Invigning.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Animated Hero Text */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-[#F9D00F]">Q</span>uality{" "}
            <span className="text-[#F9D00F]">S</span>ervice{" "}
            <span className="text-[#F9D00F]">C</span>leanliness
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-[#F9D00F]">T</span>o make delicious feel-good
            moments easy for everyone
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className=" w-1/2 right-0 absolute">
        <Image
          src="/Vector.svg"
          alt="Wave divider"
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* ---------------- Our Story Section ---------------- */}
      <section className="mt-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-6 -left-6 bg-[#f7e6c4] w-16 sm:w-24 h-16 sm:h-24 rounded-lg"></div>
              <img
                src="/1.jpg"
                alt="mcdonald's clown"
                className="relative rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                QSC Restauranger
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                Kvalitet, Service och Renlighet – varje dag, i varje{" "}
                <span className="text-[#f9d00f]">möte</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                Sedan starten <span className="text-[#f9d00f]">1993</span> har
                QSC Restauranger & Claes-Göran växt till att bli en respekterad
                aktör inom den svenska restaurangbranschen. Vi äger och driver
                flera McDonald’s-restauranger i Sverige och bygger varje dag vår
                verksamhet på tre grundpelare: kvalitet, service och renlighet,
                alltid med gästen i fokus.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                Vår passion för matupplevelser, vår tro på medarbetarna som vår
                viktigaste resurs och vårt ansvarstagande i samhället gör oss
                till en modern arbetsgivare och pålitlig restaurangpartner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Claes Section ---------------- */}
      <div className="max-w-7xl mx-auto container-custom">
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12 mt-20">
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/Claes-Göran-y.png"
              alt="claes"
              className="w-100 h-100 object-cover rounded-full md:w-150 md:h-150"
            />
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              <span className="text-yellow-400">Claes Göran</span> Jönsson
            </h2>
            <p className="text-2xl font-semibold mt-1">(Franchisetagare)</p>
            <p className="text-gray-700 text-base sm:text-lg mt-4">
              Kort information
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------- Timeline ---------------- */}
      <Timeline />

      {/* ---------------- Team Philosophy ---------------- */}
      <section className="mt-20">
        <section className=" container-custom py-16 md:py-24 bg-[#FBF7F7]  ">
          <div className=" max-w-7xl mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-6">
                  Vår filosofi
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  På QSC tror vi på kraften i samarbete och innovation. Vår
                  ledningsgrupp består av experter inom sina respektive områden,
                  men vi arbetar alltid som ett team.
                </p>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  Vi uppmuntrar kreativitet, idéer och personligt ansvar,
                  samtidigt som vi alltid håller fast vid våra kärnvärden
                  Kvalitet, Service och Renlighet. Tillsammans skapar vi
                  restaurangupplevelser som känns för gästen och medarbetaren.
                </p>
              </div>
              <div className="bg-[#F9D00F]/20 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F9D00F] rounded-full flex items-center justify-center">
                    <Users className="text-black w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Tillsammans gör vi skillnad
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                  Vår styrka ligger i mångfalden av människor, perspektiv och
                  erfarenheter. Genom att kombinera expertis från olika delar av
                  restaurangvärlden skapar vi en unik helhet. Vi utvecklar vår
                  service och vår arbetsmiljö för att överträffa förväntningar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ---------------- Scrolling Strip ---------------- */}
      <div className="relative w-full overflow-hidden mt-12">
        <div
          ref={stripRef}
          className="flex items-center"
          style={{
            width: "max-content",
            willChange: "transform",
          }}
        >
          {[...stripImages, ...stripImages].map((src, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 mx-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={src}
                alt={`Strip ${idx + 1}`}
                style={{
                  maxHeight: "400px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
