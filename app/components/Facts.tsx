"use client";
import React from "react";

const stats = [
  { value: "30+", label: "Restauranger" },
  { value: "2000+", label: "Medarbetare" },
  { value: "2", label: "Länder" },
  { value: "40 år", label: "Av erfarenhet" },
];

const StatsSection = () => {
  return (
    <section className="bg-[#FBF7F7] py-12 ">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          QSC | FAKTA
        </span>
       
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-3xl font-bold text-[#F0AE2C]">
              {stat.value}
            </span>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;