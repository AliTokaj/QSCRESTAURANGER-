import React from "react";
import { Users, Mail, Phone } from "lucide-react";
import OrganizationSection from "../components/OrganizationSection ";
import Image from "next/image";


const page = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Claes Göran Jönsson",
      role: "Franchisetagare",
      image: "/Claes-Göran-y.png",
      bio: " Text om Clase",
    },
    {
      id: 2,
      name: "Omar Dabous",
      role: "Driftchef",
      image: "/omar-y.jpg",

      bio: "text om Omar",
    },
    {
      id: 3,
      name: "Aron Yohannes",
      role: "Supervisor",
      image: "/aron-y.jpg",

      bio: "Jag började min McDonald’s-karriär redan som 16-åring. Genom åren har jag arbetat mig igenom samtliga positioner i restaurangen, vilket har gett mig en djup förståelse för både drift och ledarskap. Idag arbetar jag som supervisor för våra restauranger i Uppsala och Norrland. Jag brinner för att utveckla våra fantastiska medarbetare. Att få vara med och se individer växa, ta nya steg i sin karriär och nå sin fulla potential är något jag värdesätter högt och som ger mitt arbete verklig mening.",
    },
    {
      id: 4,
      name: "Amjd (Amjad) Kryem",
      role: "Supervisor",
      image: "/amjd-y.png",

      bio: "Jag började på McDonald’s som 18-åring och har sedan dess haft roller som medarbetare, restaurangchef och supervisor i flera städer. McDonald’s har gett mig unika möjligheter att växa som ledare och person. Idag jobbar jag med fokus på matsäkerhet, personalutveckling och att varje dag skapa en trygg, effektiv och inspirerande arbetsmiljö. För mig handlar ledarskap om att utveckla människor och leverera kvalitet varje dag.",
    },
    {
      id: 5,
      name: "Tamara Prokic",
      role: "Supervisor",
      image: "/tamara-y.jpg",

      bio: "text om Tamara",
    },
    {
      id: 6,
      name: "Max Lindberg",
      role: "Supervisor",
      image: "/max-y.png",

      bio: "Tillsammans med mina kollegor och restaurangchefer är jag med och stöttar det dagliga arbetet. Jag brinner för att bidra till ett starkt team, god kvalitet och en positiv upplevelse, både för gäster och medarbetare.",
    },
    {
      id: 7,
      name: "Helene Sköld",
      role: "HR-chef",
      image: "/helene-y.png",

      bio: "Jag började min karriär på McDonald’s som 16-åring och har sedan dess jobbat många år inom hotell & rese-branschen och har nu nästan 10 års arbetslivserfarenhet inom McDonalds. Idag jobbar jag som HR-chef & koordinator och jag får absolut nytta av mina tidigare år inom arbetslivet och har en genuin passion att jobba med människor.",
    },
    {
      id: 8,
      name: "	Ida Jönsson",
      role: " HR-assistent",
      image: "/ida-y.png",

      bio: "Jag började min karriär på McDonald’s som ung och har sedan dess haft ett stort intresse för service och ledarskap. Jag har studerat Hospitality and Design Management i Schweiz och arbetat som Operations Manager på två restauranger i Göteborg. Idag jobbar jag som HR-assistent och rekryteringsansvarig, där jag får kombinera min erfarenhet från restaurangbranschen med mitt stora intresse för människor och utveckling.",
    },
    {
      id: 9,
      name: "Felicia Ekeljung",
      role: "HR-assistent",
      image: "/felicia-y.png",

      bio: "Med erfarenhet från alla roller på McDonald’s och en nuvarande roll inom HR arbetar jag för att skapa en trygg och trivsam arbetsmiljö. Jag tror på att engagerade medarbetare är nyckeln till nöjda gäster – och en hållbar verksamhet.Kul info om mig: jag pratar flytande japanska!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Vår <span className="text-yellow-400">ledningsgrupp</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Bakom varje välfungerande restaurang står ett starkt team
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
      
      
      <OrganizationSection />

      <div className="container-custom">
        {/* Team Section */}

        <section className="max-w-7xl mx-auto mt-20 ">
          <div className="text-center ">
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Ett starkt support-team
            </span>
          </div>
          <div className="container-custom mx-auto text-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#FBF7F7] shadow-lg rounded-2xl p-6 text-center"
                >
                  {
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-full"
                    />
                  }
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>

                  <p className=" mt-2 text-gray-700  ">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Team Philosophy Section */}
      <section className="mt-20">
        <section className=" container-custom py-16 md:py-24 bg-[#FBF7F7]  ">
          <div className=" max-w-7xl mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Vår filosofi
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  På QSC tror vi på kraften i samarbete och innovation. Vår
                  ledningsgrupp består av experter inom sina respektive områden,
                  men vi arbetar alltid som ett team.
                </p>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  Vi uppmuntrar kreativitet, idéer och personligt ansvar,
                  samtidigt som vi alltid håller fast vid våra kärnvärden
                  Kvalitet, Service och Renlighet. Tillsammans skapar vi
                  restaurangupplevelser som känns för gästen och medarbetaren.
                </p>
              </div>
              <div className="bg-[#F9D00F]/20 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F9D00F] rounded-full flex items-center justify-center">
                    <Users className="text-black w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Tillsammans gör vi skillnad
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                  Vår styrka ligger i mångfalden av människor, perspektiv och
                  erfarenheter. Genom att kombinera expertis från olika delar av
                  restaurangvärlden skapar vi en unik helhet. Vi utvecklar vår
                  service och vår arbetsmiljö för att överträffa förväntningar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      
    </div>
  );
};

export default page;
