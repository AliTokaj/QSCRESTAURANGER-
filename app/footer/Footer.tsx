import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className=" bg-black text-white py-12">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-4">
           
          <img
  src="/qscWhite.svg"
  alt="Sverige Norge karta"
  className="mb-6 md:w-3/4 w-full h-auto"
/>
            <div className="flex space-x-4">
              
              <a href="https://www.linkedin.com/company/qsc-restauranger-ab" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">
                <Linkedin size={40} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Meny</h3>
            <ul className="space-y-2">
              <li>
                <a href="/jobba-hos-oss" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">Jobba hos oss</a>
              </li>
              <li>
                <a href="/ledningsgrupp" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">Ledningsgrupp</a>
              </li>
              <li>
                <a href="/om-oss" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">Om oss</a>
              </li>
              <li>
                <a href="/ronald-mcdonald-barnfond" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">Ronald McDonald</a>
              </li>
              <li>
                <a href="/kontakta-oss" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">Kontakta oss</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
               Stensborgsgatan 4, 721 32 Västerås
              </li>
              <li>
                <a href="tel:+46812345678" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">
                  021-13 40 49
                </a>
              </li>
              <li>
                <a href="mailto:info@Qsc.se
" className="text-white/70 hover:text-yellow-500 transition-colors duration-300">
                  info@Qsc.se
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">QSC</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="block font-medium">Organisationsnummer</span>
                556632-6475
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {year} QSC Restauranger. All rights reserved.</p>
        </div>
        <div className="text-white/50 text-sm text-center mt-10">
          <p> Powered by <a href='https://drifaab.se/' className="hover:text-yellow-500 transition-colors duration-300">Drifa </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;