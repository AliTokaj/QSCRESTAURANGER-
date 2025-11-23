import { useState } from "react";

const CareerImageSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <div>
      {/* MOBIL: visar JPG och öppnar lightbox vid klick */}
      <div className="block lg:hidden mt-8 md:mt-12 text-center">
        <img
          src="/IMG_3065.jpg"
          alt="Karriär - mobilbild"
          className="mx-auto w-full h-auto rounded-lg cursor-pointer"
          onClick={openLightbox}
        />
      </div>

      {/* DESKTOP: visar SVG */}
      <div className="hidden lg:block mt-8 md:mt-12 text-center">
        <img
          src="/karriar-tappan.svg"
          alt="Karriär-tappan"
          className="mx-auto w-full h-auto"
        />
      </div>

      {/* LIGHTBOX – enkel version utan zoom */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          
          {/* Stäng-knapp */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>

          {/* Bilden */}
          <img
            src="/IMG_3065.jpg"
            alt="Förstorad visning"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CareerImageSection;
