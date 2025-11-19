"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const sponsors = [
  "Surahammar A-lag",
  "Sirius bandy",
  " Hallstahammars HK Herr",
  " Hallstahammars HK Dam",
  "Paraolymics Valsätraskolan",
  "Frukost till Ronald McDonald Hus",
  "VIK Hockey",
  "Gideonsbergs IF",
  "Västerås BK30",
  "Skiljebo SK",
  "IFK Västerås",
  "Västerås Innebandy",
  "Almtuna IS",
  "Siruis Fotboll",
  "Sirius Bandy",
  "Uppsala Basket",
  "Uppsala Handbollsklubb",
  "Wings HC Arlanda (Märsta)",
  "Sigtuna Basketklubb ",
  "Östersunds fotbollsklubb",
  "Östersunds IK",
  " Warpen Hockey",
  "FBC Bollnäs",
  "Bollnäs GIF Bandy",
  "AIK Hockey  (Härnösand)",
  "Örebro Elithockey",
  "ÖSK Fotboll",
  "KIF Damfotboll",
  "Örebro Tennisklubb",
  "Örebro City Golf",
  "ÖSK Handbollsklubb",
  "Nattvandrarna",
];

// Split sponsors into chunks for columns
const chunkArray = (arr: string[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
};

const ValuesSection: React.FC = () => {
  const columns = chunkArray(sponsors, 7);

  // Framer Motion variants
  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section className="relative mt-20 overflow-hidden">
 {/* Mobile version */}
<div className="absolute inset-0 flex justify-center items-center  pointer-events-none sm:hidden">
  <img src="/sign-90.svg" alt="Decorative arrows mobile" className="w-1/2 mx-auto" />
</div>

{/* Desktop version */}
<div className="absolute inset-0 flex justify-center items-center  pointer-events-none hidden sm:flex">
  <img src="/sign.svg" alt="Decorative arrows desktop" className="w-full mx-auto" />
</div>


  <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10 text-left">
        <span className="bg-[#ffb216]"> STOLTA SAMARBETEN</span>
      </h2>

      {/* Sponsors Grid */}
      <div className="flex justify-center py-8 mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-black text-left text-gray-700 text-base sm:text-lg">
          {columns.map((col, i) => (
            <div key={i} className="space-y-2">
              {col.map((sponsor, j) => (
                <motion.p
                  key={j}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {sponsor}
                </motion.p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ValuesSection;
