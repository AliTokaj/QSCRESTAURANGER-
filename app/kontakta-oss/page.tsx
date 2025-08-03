import React from 'react';
import { MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm'; // Import the Client Component

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
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Har du frågor eller funderingar?
            </h2>
          </div>
        </div>
      </section>
      

      
      <div className="max-w-7xl mx-auto border-t border-black/10"></div>

      {/* Kontakt Oss Form */}
      <section className="bg-[#FBF7F7] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Undrar du över något?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Hör av <span className="text-yellow-400">dig!</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mt-2">
              Skicka ett meddelande till oss, så hör vi av oss inom kort. Vi på QSC Restaurang AB är mer än glada att svara på dina synpunkter och frågor. 😊
            </p>
          </div>

          {/* Use the Client Component here */}
          <ContactForm />
        </div>
      </section>

      {/* Location Map */}
      <div className="overflow-hidden h-96 shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.3661102571405!2d16.53795887678519!3d59.60984877932493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e9fb85823cf11%3A0x1fb380d10df0fb84!2sStensborgsgatan%204%2C%20721%2032%20V%C3%A4ster%C3%A5s!5e0!3m2!1sen!2sse!4v1696422855779!5m2!1sen!2sse"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="QSC Office Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;