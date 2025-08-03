"use client";
import React from "react";

const teamImages = [
  "/team1.jpg",
  "/team2.jpg",
  "/team3.jpg",
  "/team4.jpg",
  "/team5.jpg",
  "/team6.jpg",
  "/team7.jpg",
  "/team8.jpg",
  "/team9.jpg",
  "/team10.jpg",
];

const TeamGallery = () => {
  return (
    <section className=" mt-20">
    
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {teamImages.map((src, index) => (
          <div key={index} className="w-full  h-100 overflow-hidden">
            <img
              src={src}
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
