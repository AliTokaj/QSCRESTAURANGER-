"use client";
import React from "react";
import { motion } from "framer-motion";

const BurgerSection: React.FC = () => {
  return (
    <section className="bg-[#F92727] py-16 px-4">
      <div>
        <motion.img
          src="/burger.svg"
          alt="Burger illustration"
          className="mx-auto"
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default BurgerSection;
