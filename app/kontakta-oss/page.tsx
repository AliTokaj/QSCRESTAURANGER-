import React from 'react';
import { MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm'; // Import the Client Component
import ValuesSection from '../components/ValuesSection';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Kontakta <span className="text-yellow-400">oss</span>
            </h1>
           
          </div>
        </div>
      </section>
      

      
      <div className="max-w-7xl mx-auto border-t border-black/10"></div>

      {/* Kontakt Oss Form */}
      <section className="bg-[#FBF7F7] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
           
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
             Hör gärna av dig till  <span className="text-yellow-400">oss</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mt-2">
Vi på QSC uppskattar att höra från dig – oavsett om det gäller feedback, idéer eller bara en nyfiken fråga. Fyll i formuläret, så svarar vi så snart vi kan.            </p>
          </div>

          {/* Use the Client Component here */}
          <ContactForm />
        </div>
      </section>

    
    </div>
  );
};

export default Page;