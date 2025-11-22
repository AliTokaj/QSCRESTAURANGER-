"use client";

import React, { useState, useRef, useEffect } from "react";
import EmployeeSection from "./components/EmployeeSection";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import ValuesSection from "./components/ValuesSection";

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
    "7.jpg",

    "/11.jpg",
    "/12.jpg",

    "/16.jpg",
    "/17.jpg",

    "/19.jpg",

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
      <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
       <video
  autoPlay
  loop
  muted
  playsInline
  disablePictureInPicture
  controls={false}                 // ✅ inga kontroller
  controlsList="nodownload noremoteplayback noplaybackrate"
  onContextMenu={(e) => e.preventDefault()}  // ✅ blockar högerklick
  className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover pointer-events-none"
>
  <source
    src="https://pub-e2eba5a709ec4c6d95696e1f8e70f140.r2.dev/Invigning.mp4"
    type="video/mp4"
  />
</video>

        {/* Animated Hero Text */}
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-[#F9D00F]">Q</span>uality{" "}
            <span className="text-[#F9D00F]">S</span>ervice{" "}
            <span className="text-[#F9D00F]">C</span>leanliness
          </motion.h1>
          <motion.p
            className="mt-6 text-xs md:text-base text-white max-w-2xl mx-auto"
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
                aktör inom den svenska restaurangbranschen. Vi  driver
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
      <div
        className="max-w-7xl mx-auto container-custom relative overflow-hidden mt-20"
        style={{
          backgroundImage: "url('/map.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12 py-8 md:py-20 px-4 md:px-0">
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
            className="w-80 h-80 object-cover rounded-full sm:w-100 sm:h-100 lg:w-150 lg:h-150"

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
              <span className="text-yellow-400">Claes-Göran</span> Jönsson
            </h2>
            <p className="text-2xl font-semibold mt-1">
              (Årets franchisetagare{" "}
              <span className="text-yellow-400">2019</span>)
            </p>
            <p className="text-gray-700 text-base sm:text-lg mt-4 ">
              Började jobba på McDonald's Örebro 1984 och hade redan då siktet
              inställt högt och ville utvecklas inom McDonald's. <br />
              Jag flyttade till Västerås 1990 och fick möjlighet att vara
              ansvarig för de tre befintliga restaurangerna. <br />
              1993 fick jag möjlighet att bli franchisetagare (JWP) tillsammans
              med Svenska McDonalds och jag drev då 9 restauranger.
              <br /> Från 2002 stod jag helt på egna ben och fick köpa
              restaurangerna Hälla och Stenby i Västerås. 2016/2017 blev jag
              kontaktad av norska McDonald's som behövde franchisetagare och då
              fick jag möjligheten att driva tre restauranger. Idag
              har vi 20 restauranger i Sverige och 11 i Norge med två öppningar planerade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------- Timeline ---------------- */}
      <Timeline />
      <ValuesSection />

      

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
