import React from "react";
import ValuesSection from "../components/ValuesSection";
import Timeline from "../components/Timeline";
import Facts from "../components/Facts";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
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
      </section>
   <div className=" w-1/2 right-0 absolute 
          "> 
            <Image
                src="/Vector.svg"
                alt="Wave divider"
                width={400}
                height={200}
                className="w-full h-auto"
            />
        </div>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="container-custom ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/9.jpg')" }}
                ></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-6 md:-right-6 md:w-36 md:h-36 rounded-2xl bg-yellow/20 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 md:-top-6 md:-left-6 md:w-36 md:h-36 rounded-2xl bg-gold/20 -z-10"></div>
            </div>

            <div>
              <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                Team
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 mt-4">
                Outstanding restaurang{" "}
                <span className="text-[#F0AE2C]">2024</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mt-4 mb-6"></p>
              <p className="text-gray-700 text-base sm:text-lg mt-4 mb-6"></p>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <Timeline />
      {/* Reklamsektion */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Historiska<span className="text-[#F0AE2C]"> reklamfavoriter</span>{" "}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              En tillbakablick på klassiska reklamfilmer från McDonald’s Sverige
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <a
              href="https://youtu.be/cTVhZqNwn3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src="https://img.youtube.com/vi/cTVhZqNwn3Y/hqdefault.jpg"
                  alt="Reklam 1993"
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
                McDonald's reklam – 1993
              </p>
            </a>

            {/* Video 2 */}
            <a
              href="https://youtu.be/I94g97bFngM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src="https://img.youtube.com/vi/I94g97bFngM/hqdefault.jpg"
                  alt="El Maco 1999"
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
                El Maco – 1999
              </p>
            </a>

            {/* Video 3 */}
            <a
              href="https://youtu.be/S1TnWkqjnzU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src="https://img.youtube.com/vi/S1TnWkqjnzU/hqdefault.jpg"
                  alt="Livet har sina goda stunder"
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
                Livet har sina goda stunder
              </p>
            </a>
          </div>
        </div>
      </section>

      <Facts />
    </div>
  );
};

export default Page;
