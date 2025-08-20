"use client";
import React, { useState } from "react";
import { Users, Mail, Phone } from "lucide-react";

import Image from "next/image";
import TeamBios from "../components/TeamBios";

const page = () => {

  



  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Vår <span className="text-yellow-400">ledningsgrupp</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Bakom varje välfungerande restaurang står ett starkt team
            </h2>
          </div>
        </div>
      </section>
      <div className=" w-1/2 right-0 absolute ">
        <Image
          src="/Vector.svg"
          alt="Wave divider"
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <TeamBios />

      {/* Team Philosophy Section */}
      <section className="mt-20">
        <section className=" container-custom py-16 md:py-24 bg-[#FBF7F7]  ">
          <div className=" max-w-7xl mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
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
    </div>
  );
};

export default page;
