"use client";
import React from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "1979 ",
    title: "Allt började på Askersundsgrillen",
    description:
      "Claes köpte Askersundgrillen som 19-åring och sålde sin första hamburgare.",
  },
  {
    year: "1984 ",
    title:
      "Claes såg McDonalds som ett spännande varumärke och fick jobb på McDonald's i Örebro",
    description:
      "Kyckling, fisk och paj var den första stationen han jobbade på",
  },
  {
    year: "1993",
    title: "Claes blev godkänd franchisetagare och drev Vasagatan",
    description:
      "Skrapan och Hälla i Västerås genom ett partnerskapsbolag tillsammans med Svenska McDonald's.",
  },
  {
    year: "2002 ",
    title: "QSC Restauranger AB",
    description:
      "Claes tog över Hälla och Stenby till 100% och stod helt på egna ben och QSC Restauranger AB bildades.",
  },
  {
    year: "2016 ",
    title: "Norge ",
    description:
      "Blev godkänd franchisetagare i Norge och blev därmed den andra franchisetagaren i Europa med restauranger i två länder.",
  },
  {
    year: "2025  ",
    title: "2000 anställda och driver 30 restauranger ",
    description:
      "QSC koncernen har nu ca 2000 anställda och driver 30 restauranger och fler öppningar är planerade.",
  },
];

const MilestonesSection = () => {
  return (
    <section className="mt-20 relative overflow-x-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#FBF7F7]/60 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#F0AE2C]/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#F0AE2C]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#F0AE2C]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#F0AE2C]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#F0AE2C]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/4 w-20 h-20 bg-[#FFFDD0]/40 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide shadow inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          VÅR RESA
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Viktiga <span className="text-[#F0AE2C]">milstolpar</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-2 bg-gradient-to-b from-[#F0AE2C] to-[#FFFDD0] rounded-full -translate-x-1/2 z-0"></div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col sm:flex-row items-center w-full mb-16 group z-10 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Connector and dot */}
              <div className="flex flex-col items-center sm:w-1/2 w-full">
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <div className="w-8 h-8 bg-[#F0AE2C] rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                <motion.span
                  className="mt-2 text-[#F0AE2C] font-bold text-lg drop-shadow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                >
                  {milestone.year}
                </motion.span>
              </div>

              {/* Card */}
              <motion.div
                className={`sm:w-1/2 w-full mt-8 sm:mt-0 px-4 ${
                  index % 2 === 0 ? "sm:pl-12 sm:pr-0" : "sm:pr-12 sm:pl-0"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border-l-8 border-[#F0AE2C] hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <h3 className="font-bold text-xl text-[#F0AE2C] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
