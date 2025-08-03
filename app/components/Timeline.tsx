"use client";
import React from "react";
import { Clock } from "lucide-react";

const milestones = [
  {
    year: "1979 ",
    title: "Allt började på Askersundsgrillen",
    description: "Claes köpte Askersundgrillen som 19-åring och sålde sin första hamburgare.",
  },
  {
    year: "1984 ",
    title: "Claes såg McDonalds som ett spännande varumärke och fick jobb på McDonald's i Örebro",
    description: "Kyckling, fisk och paj var den första stationen han jobbade på",
  },
  {
    year: "1993",
    title: "Claes blev godkänd franchisetagare och drev Vasagatan",
    description: "Skrapan och Hälla i Västerås genom ett partnerskapsbolag tillsammans med Svenska McDonald's.",
  },
  {
    year: "2002 ",
    title: "QSC Restauranger AB",
    description: "Claes tog över Hälla och Stenby till 100% och stod helt på egna ben och QSC Restauranger AB bildades.",
  },
  {
    year: "2016 ",
    title: "Norge ",
    description: "Blev godkänd franchisetagare i Norge och blev därmed den andra franchisetagaren i Europa med restauranger i två länder.",
  },
  {
    year: "2025  ",
    title: "2000 anställda och driver 30 restauranger ",
    description: "QSC koncernen har nu ca 2000 anställda och driver 30 restauranger och fler öppningar är planerade.",
  },
];

const MilestonesSection = () => {
  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          VÅR RESA
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight font-display mt-4">
          Viktiga <span className="text-[#F0AE2C]">milstolpar</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col space-y-6 px-4 sm:px-6 lg:px-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0"
          >
            <div className="flex items-center text-black text-lg font-semibold">
              <Clock className="w-5 h-5 mr-2 text-[#F0AE2C]" /> {milestone.year}
            </div>
            <div className="bg-[#FBF7F7] p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg text-gray-800">{milestone.title}</h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestonesSection;