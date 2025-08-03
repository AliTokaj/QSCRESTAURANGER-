// pages/404.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-4 py-10 text-black">
      {/* McFlury GIF or Image */}
      <div className="mb-6 md:mb-0 md:mr-10">
        <Image
          src="/mcFlury.gif"
          alt="McFlury"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-6xl font-extrabold mb-2">Oj!</h1>
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">
          Error 404
        </p>
        <p className="mb-4">
Sidan du söker finns inte.        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          
        
            <a className="border border-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-100 transition " href='/'>
           QSC
            </a>
         
        </div>
      </div>
    </main>
  );
}
