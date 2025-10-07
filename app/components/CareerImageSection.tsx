import { useState, useEffect } from 'react';
import Image from 'next/image';

const CareerImageSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleImageClick = () => {
    if (isMobile) {
      setIsOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Karriär-tappan Image */}
      <div className="mt-8 md:mt-12 text-center">
        <div 
          className={`cursor-pointer ${isMobile ? 'cursor-pointer' : 'cursor-auto'}`}
          onClick={handleImageClick}
          role={isMobile ? "button" : undefined}
          tabIndex={isMobile ? 0 : undefined}
          onKeyDown={(e) => {
            if (isMobile && (e.key === 'Enter' || e.key === ' ')) {
              handleImageClick();
            }
          }}
        >
          <Image
            src="/karriar-tappan.svg"
            alt="Karriär-tappan"
            width={1200}
            height={300}
            className="mx-auto w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Lightbox för mobil/tablet */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          {/* Stäng-knapp */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-10 bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
            onClick={handleCloseLightbox}
            aria-label="Stäng bildvisare"
          >
            ×
          </button>
          
          {/* Bild container med zoom-möjligheter */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-full max-h-full overflow-auto">
              <Image
                src="/karriar-tappan.svg"
                alt="Karriär-tappan - förstorad visning"
                width={1200}
                height={300}
                className="max-w-full max-h-full object-contain"
                style={{
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          </div>

          {/* Instruktioner för användaren */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            Zoom med pinch eller dubbelklick
          </div>
        </div>
      )}
    </>
  );
};

export default CareerImageSection;