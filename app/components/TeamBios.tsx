"use client";
import React from "react";

const TeamBios = () => {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto container-custom space-y-32">
        {/* Veronica */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/aron.jpg"
              alt="Veronica Amaya"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
            <span className="text-yellow-400">Aron</span> Yohannes
            </h2>
            <p className="text-xl font-semibold mt-1">(Supervisor )</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
           Kort infromation om den personal och sin resa i QSC
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p><strong>Favoritobjekt på menyn:</strong> Dubbel Cheeseburgar</p>
              <p><strong>favoritlåt:</strong> Lady in Red by Eric Clapton</p>
              <p><strong>Sin kända ord:</strong> Bra jobbat alla</p>
            </div>
          </div>
        </div>

        {/* Andie */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/mustafa.jpg"
              alt="Andie Amaya"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Mustafa <span className="text-yellow-400">Ghannam</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(Restaurangchef)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
            Kort infromation om den personal och sin resa i QSC
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p><strong>Favoritobjekt på menyn:</strong>   Tasty Chicken Burger</p>
              <p><strong>favoritlåt:</strong> Lady in Red by Eric Clapton</p>
              <p><strong>Sin kända ord:</strong> Kan du jobba imorgon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBios;
