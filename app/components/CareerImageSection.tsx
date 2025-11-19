import { useState, useEffect } from 'react';
import Image from 'next/image';

const CareerImageSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    // Lightbox ska inte öppnas på desktop enligt din önskan,
    // men om du vill ha kvar funktionen kan vi lämna denna tom.
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="hidden lg:block">
      {/* Bild på desktop */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="cursor-auto">
          <img
            src="/karriar-tappan.svg"
            alt="Karriär-tappan"
            className="mx-auto w-full h-auto"
          />
        </div>
      </div>

      {/* Lightbox – visas aldrig eftersom komponenten inte visas på mobil */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-10 bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
            onClick={handleCloseLightbox}
            aria-label="Stäng bildvisare"
          >
            ×
          </button>

          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-full max-h-full overflow-auto">
              <img
                src="/karriar-tappan.svg"
                alt="Karriär-tappan - förstorad visning"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            Zooma med pinch eller dubbelklick
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerImageSection;
