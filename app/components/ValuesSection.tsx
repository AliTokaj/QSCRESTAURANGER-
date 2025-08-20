"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Coffee, User, Handshake } from "lucide-react";

const ValuesSection = () => {
  // Explicitly typing variants with Framer Motion's Variants type
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // ✅ type is restricted union, not just string
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="bg-[#FBF7F7] mt-20">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
            Våra värderingar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Det som gör oss till <span className="text-[#F0AE2C]">QSC</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Våra värderingar är mer än ord – de är vägledande principer som styr allt vi gör.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-lg hover:shadow-lg transition-all text-left border border-transparent hover:border-yellow-100"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Kvalitet i varje detalj</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Vi strävar alltid efter att leverera den högsta kvaliteten.
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-lg hover:shadow-lg transition-all text-left border border-transparent hover:border-yellow-100"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Människor i centrum</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Våra medarbetare och gäster är vår största tillgång. Vi skapar en inkluderande, trygg och trivsam miljö där alla känner sig sedda och uppskattade.
            </p>
          </motion.div>

          {/* Third Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-white p-8 rounded-lg hover:shadow-lg transition-all text-left border border-transparent hover:border-yellow-100"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Samhällsengagemang</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Genom lokala initiativ och hållbara val vill vi göra skillnad där vi verkar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
