import React from 'react'
import Image from 'next/image'
import { Gift, Landmark, Heart } from "lucide-react";


const page = () => {
  const supportOptions = [
    {
      icon: <Gift className="w-8 h-8 text-black" />, 
      title: "Bli månadsgivare",
      description: "Regelbundna gåvor ger oss möjlighet att planera långsiktigt och säkerställa kontinuitet i vår verksamhet.",
      buttonText: "Bli månadsgivare",
      link: "https://donation.ronaldmcdonaldhus.se/pfs/donation?interval=recurring",
    },
    {
      icon: <Landmark className="w-8 h-8 text-black" />, 
      title: "Egen insamling",
      description: "Att skapa en insamling är ett fint sätt att engagera sig. Till att underlätta vardagen för fler familjer med svårt sjuka barn.",
      buttonText: "Starta insamling",
      link: "https://egeninsamling.ronaldmcdonaldbarnfond.malipo.nu/",
    },
    {
      icon: <Heart className="w-8 h-8 text-black" />, 
      title: "Engångsdonation",
      description: "Varje gåva är värdefull. Du kan enkelt bidra med en valfri summa som gör skillnad för familjer med sjuka barn.",
      buttonText: "Donera",
      link: "https://donation.ronaldmcdonaldhus.se/pfs/donation",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ronald McDonald <span className="text-yellow-400">Barnfond</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            När vardagen är långt bort tar vi hemmet lite närmare.
            </h2>
          </div>
        </div>
      </section>
        <div className=" w-1/2 right-0 absolute 
                "> 
                  <Image
                      src="/Vector.svg"
                      alt="Wave divider"
                      width={400}
                      height={200}
                      className="w-full h-auto"
                  />
              </div>

       {/*  Ronald McDonald Hus Section */}
       <section className='mt-50'>
       <div className="max-w-7xl mx-auto container-custom ">
     
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full">
            <div className="absolute -top-6 -left-6 bg-[#f7e6c4] w-16 sm:w-24 h-16 sm:h-24 rounded-lg"></div>
            <img
              src="/ronaldhus1.jpg" 
              alt="mcdonald's clown"
              className="relative rounded-lg shadow-lg w-full"
            />
          </div>
          
          {/* Content Section */}
          <div>
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Ronald McDonald</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">Ronald McDonald <span className="text-[#f9d00f]">Hus</span></h2>
            <p className="text-gray-700 text-base sm:text-lg mt-4">
            Det första Ronald McDonald-huset byggdes 1993 på initiativ av Paul Lederhausen, grundaren av McDonald’s i Sverige, och hans fru Iréne. Anledningen till att de tog detta initiativ var att deras dotter hade avlidit efter en allvarlig sjukdom. Under den tiden hade de själva upplevt hur svårt det var att hålla ihop familjen och hantera alla utmaningar som följde med de många sjukhusbesöken. Ronald McDonald-huset skapades därför som en plats där familjer med sjuka barn kunde bo nära sjukhuset och få stöd under en svår tid.
            </p>
          
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="border-l-4 border-[#f9d00f] pl-4">
              <a href="https://www.ronaldmcdonaldhus.se/" target="_blank" rel="noopener noreferrer">
    <img src="RMBarnfond_logo.png" alt="insamlingskontroll_logga" className="h-12 w-auto" />
</a>
              </div>
              <div className="border-l-4 border-[#f9d00f] pl-4">
              <a href="https://www.insamlingskontroll.se/" target="_blank" rel="noopener noreferrer">
    <img src="insamlingskontroll_logga.svg" alt="RMBarnfond_logo" className="h-9 w-auto" />
</a>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
      </section>

 {/*  vad o vart är Ronald McDonald Hus Section */}
      <section className="mt-50">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container-custom">
          <div>
            <img src="ronaldhus2.jpg" alt="Ansökningsprocessen" className="w-full rounded-lg shadow-md" />
          </div>
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-yellow-400">Exakt </span> som hemma
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
              Ronald McDonald Hus fungerar som ett hem hemifrån och är ett tillfälligt boende för familjer med svårt sjuka barn som behöver specialistvård på universitetssjukhus. Här kan hela familjen bo tillsammans under barnets behandlingstid. Husen möjliggör en vardag där familjerna kan tvätta, laga mat och ha sina egna rutiner i en hemlik miljö – på gångavstånd från sjukhuset. Något av det mest betydelsefulla är också att man får möjlighet att träffa och lära känna andra familjer som är i en liknande situation och förstår vad man går igenom. Här knyts ofta vänskapsband för livet.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mt-4">
            Det finns fem Ronald McDonald Hus i Sverige belägna intill Karolinska Universitetssjukhuset i Huddinge, Drottning Silvias barnsjukhus i Göteborg, Skånes Universitetssjukhus i Lund, Universitetssjukhuset i Linköping och Akademiska Sjukhuset i Uppsala.
            </p>
             
            </div>
           
          </div>
        
      </div>
    </section>


    <section className="bg-[#FBF7F7] py-12 px-4 mt-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Sätt att  <span className="text-yellow-400">stötta</span></h2>
        <p className="text-lg text-gray-600 mt-2">
          Det finns många sätt att bidra och varje insats gör skillnad för familjer med sjuka barn.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {supportOptions.map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full flex items-center justify-center mb-4">
              {option.icon}
            </div>
            <h3 className="font-bold text-lg">{option.title}</h3>
            <p className="text-gray-700 text-base sm:text-lg text-center">{option.description}</p>
            <a 
              href={option.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded transition duration-300 hover:bg-[#F0AE2C]"
            >
              {option.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
      
    </div>
  )
}

export default page
