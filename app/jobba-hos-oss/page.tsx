"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, UserPlusIcon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import { AccordionDemo } from "../components/AccordionDemo";
import EmployeeSection from "../components/EmployeeSection";
import CareerImageSection from "../components/CareerImageSection";


const JobbHosOss = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("employee-counter");
      if (counterElement && !isCounting) {
        const rect = counterElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsCounting(true);
          startCounter();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCounting]);

  const startCounter = () => {
    let start = 0;
    const end = 1500;
    const duration = 2000;
    const intervalTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, intervalTime);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative bg-[#FBF7F7]">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Jobba hos <span className="text-yellow-400">oss</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-gray-700"
            >
              Är du vår nästa stjärna?
            </motion.h2>
            <motion.div
              id="employee-counter"
              className="mt-6 text-5xl font-bold text-[#F9D00F] relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {count}
              <span className="text-black text-lg font-extrabold ml-2">
                anställda i Sverige 
              </span>
            </motion.div>
            
          </div>
          
        </div>
             <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 md:mt-2 text-center"
      >
        <a
          href="https://www.mcdonalds.com/se/sv-se/jobb/sok-jobb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffbd0b] hover:bg-[#e6a526] text-black px-8 py-3 md:px-10 md:py-4 rounded-lg font-medium text-lg shadow-md hover:opacity-90 transition transform hover:scale-105"
        >
          Jobba hos McDonald's
        </a>
      </motion.div>
      </section>
      <div
        className=" w-1/2 right-0 absolute 
        "
      >
        <Image
          src="/Vector.svg"
          alt="Wave divider"
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              Därför ska du jobba hos <span className="text-yellow-400">oss!</span>{" "}
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
              Vi erbjuder mer än ett jobb – vi erbjuder en framtid att växa i!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
            {[
              {
                icon: (
                  <BriefcaseIcon className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
                ),
                title: "Karriärsutveckling",
                description:
                  "Hos oss behöver du ingen tidigare erfarenhet – vi tror på att växa tillsammans. Med rätt vilja och engagemang ger vi dig verktygen att utvecklas, oavsett var du börjar. Det finns alltid något nytt att lära på våra restauranger, och utbildningen fortsätter så länge du vill framåt. Hur långt du går? - Det bestämmer du själv.",
              },
              {
                icon: (
                  <UserPlusIcon className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
                ),
                title: "Inkluderande miljö",
                description:
                  "Hos oss är mångfald en styrka. Vi skapar en trygg och välkomnande arbetsplats där du får vara dig själv och bli uppskattad för den du är. Vi respekterar varandra, lyfter våra olikheter – och ser till att alla får möjlighet att växa och ta ansvar.",
              },
              {
                icon: (
                  <CheckCircleIcon className="w-7 h-7 md:w-8 md:h-8 text-yellow-500" />
                ),
                title: "Förmåner & balans",
                description:
                  "Vi bryr oss om hur du mår – både på jobbet och utanför. Därför erbjuder vi en trygg arbetsmiljö, schyssta villkor och möjligheter att växa i din roll. Hos oss ska du kunna trivas, känna dig sedd och må bra varje dag.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FBF7F7] p-6 md:p-8 rounded-lg text-left hover:shadow-md transition-all h-full"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-left">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg text-left">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
     <CareerImageSection />

  


  

      <EmployeeSection />

      {/* FAQ Section */}
      <section className=" py-16 px-4 sm:px-6 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-yellow-400">F</span>rågor &{" "}
            <span className="text-yellow-400">S</span>var
          </h2>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <AccordionDemo />
        </div>
      </section>
    </div>
  );
};

export default JobbHosOss;
