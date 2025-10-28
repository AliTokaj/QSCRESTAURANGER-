"use client";
import React from "react";

const TeamBios = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto container-custom space-y-32">
        {/* clase */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/Claes-Göran-y.png"
              alt="claes"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Claes-</span>Göran Jönsson
            </h2>
            <p className="text-xl font-semibold mt-1">(Franchisetagare)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Började jobba på McDonald's Örebro 1984 och hade redan då siktet
              inställt högt och ville utvecklas inom McDonald's. Jag flyttade
              till Västerås 1990 och fick möjlighet att vara ansvarig för de tre
              befintliga restaurangerna. 1993 fick jag möjlighet att bli
              franchisetagare (JWP) tillsammans med Svenska McDonalds och jag
              drev då 9 restauranger. Från 2002 stod jag helt på egna ben och
              fick köpa restaurangerna Hälla och Stenby i Västerås. 2016/2017
              blev jag kontaktad av norska McDonald's som behövde
              franchisetagare och då fick jag möjligheten att driva tre
              restauranger i innlandet. Idag har vi 19 restauranger i Sverige
              och 11 i Norge.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" Dubbel hamburgare endast sallad och tomat 🙄 "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {"  Have you ever seen the rain, Credence Clearwater Revival"}
              </p>
              <p>
                <strong>Känt cita:</strong>
                {
                  "  Du måste jobba med dom jordgubbar du har – Petter Stordalen"
                }
              </p>
            </div>
          </div>
        </div>
         {/*  Omar*/}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/omar-y.jpg"
              alt="Omar Dabous"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Omar <span className="text-yellow-400">Dabous</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(Driftchef)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
           Sedan 2015 har jag haft en utvecklande resa inom McDonald’s och QSC från en produktions medarbetare till min nuvarande roll som Operations Manager.

Jag ansvarar för driften av våra 20 restauranger och arbetar med både operativ och strategisk utveckling. Mitt fokus ligger på att optimera verksamheten, utveckla våra ledare och säkerställa högsta kvalitet i service och drift.

Under åren har jag varit delaktig i flera nyöppningar, ombyggnationer och implementeringen av McCafé konceptet på flera restauranger. Jag drivs av att skapa framgångsrika team och bidra till en positiv upplevelse för både gäster och medarbetare.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>{" Truffles & Onions, bonaqua naturell och dubbel espresso."}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>{" "}
              </p>
              <p>
                <strong>Känt cita:</strong>{"Det kanske inte är vårt fel, men det är vårt ansvar att lösa det "}
              </p>
            </div>
          </div>
        </div>
         {/* Aron */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/aron-y.jpg"
              alt="Aron Yohannes"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Aron</span>Yohannes
            </h2>
            <p className="text-xl font-semibold mt-1">(Supervisor)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Jag började min McDonald’s-karriär redan som 16-åring. Genom åren
              har jag arbetat mig igenom samtliga positioner i restaurangen,
              vilket har gett mig en djup förståelse för både drift och
              ledarskap. Idag arbetar jag som supervisor för våra restauranger i
              Uppsala och Norrland. Jag brinner för att utveckla våra
              fantastiska medarbetare. Att få vara med och se individer växa, ta
              nya steg i sin karriär och nå sin fulla potential är något jag
              värdesätter högt och som ger mitt arbete verklig mening.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds: </strong>{" Dubbel cheese och cola zero"}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>{" "}
              </p>
              <p>
                <strong>Känt cita: </strong>{"Det spelar ingen roll hur långsamt du går så länge du inte stannar. "}
              </p>
            </div>
          </div>
        </div>
          {/* Amjd (Amjad) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/amjd-y.png"
              alt="Amjd (Amjad) Kryem"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Amjd  <span className="text-yellow-400">Kryem</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(Supervisor)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
             Jag började jobba på McDonald’s i april 2017, samtidigt som jag gick på gymnasiet. Det som först var ett extrajobb blev snabbt något jag ville satsa mer på. Efter studenten kändes det helt naturligt att ta ett sabbatsår för att kunna utvecklas och lära mig så mycket som möjligt inom McDonald’s.

Idag har jag arbetat som Supervisor i fem år och fått möjligheten att samarbeta med många olika restauranger runt om i landet. Under resan har jag verkligen upptäckt vad jag brinner för – IT, matsäkerhet och framförallt människor och relationer. Det är otroligt givande att få vara med och bidra, utveckla andra och själv växa längs vägen.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>{" "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>{" "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
         {/* Tamara */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/tamara-y.jpg"
              alt="Tamara Prokic"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Tamara</span> Prokic
            </h2>
            <p className="text-xl font-semibold mt-1">(Supervisor)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Börjat 2018 inom QSC, jobbat på en av våra restauranger i Västerås
              sedan dess. Jag har jobbat som medarbetare, skiftledare, assistent
              och restaurangchef på just det restaurangen och nu jobbar jag i
              Västerås med alla våra fyra restauranger vi har där. Det är en
              spännande och lärorik resa och jag har växt som person under min
              tid inom QSC{" "}
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" Filet-o-fish "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {" The Cranberries- Zombie "}
              </p>
              <p>
                <strong> Känt citat:</strong>
                {" Because i carry it well doesnt mean its not heavy "}
              </p>
            </div>
          </div>
        </div>
         {/* Max */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/max-y.png"
              alt="Max Lindberg"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Max <span className="text-yellow-400">Lindberg</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(Supervisor)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Tillsammans med mina kollegor och restaurangchefer är jag med och
              stöttar det dagliga arbetet. Jag brinner för att bidra till ett
              starkt team, god kvalitet och en positiv upplevelse, både för
              gäster och medarbetare.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" QP Meny, pommes, cola zero utan IS, Bea dipp 🙂"}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {" Walking in Memphis - Calle Kristiansson"}
              </p>
              <p>
                <strong>Känt citat:</strong>
                {" Det löser sig!"}
              </p>
            </div>
          </div>
        </div>
         {/* Helene */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/helene-y.png"
              alt="Helene Sköld"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Helene</span> Sköld
            </h2>
            <p className="text-xl font-semibold mt-1">(HR-chef)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Jag började min karriär på McDonald’s som 16-åring och har sedan
              dess jobbat många år inom hotell & rese-branschen och har nu
              nästan 10 års arbetslivserfarenhet inom McDonalds. Idag jobbar jag
              som HR-chef & koordinator och jag får absolut nytta av mina
              tidigare år inom arbetslivet och har en genuin passion att jobba
              med människor.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" QP & dricker mjölk"}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {" Thomas Stenström – Carpe diem"}
              </p>
              <p>
                <strong>Känt citat:</strong>
                {
                  " Gör vad du kan, med vad du har, där du är – Theodore Roosevelt "
                }
              </p>
            </div>
          </div>
        </div>
         {/* Ida */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/ida-y.png"
              alt="Ida Jönsson"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Ida <span className="text-yellow-400">Jönsson</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(HR-assistent)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Jag började min karriär på McDonald’s som ung och har sedan dess
              haft ett stort intresse för service och ledarskap. Jag har
              studerat Hospitality and Design Management i Schweiz och arbetat
              som Operations Manager på två restauranger i Göteborg. Idag jobbar
              jag som HR-assistent och rekryteringsansvarig, där jag får
              kombinera min erfarenhet från restaurangbranschen med mitt stora
              intresse för människor och utveckling.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" McFeast meny (älskar det nya receptet!) "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {
                  " Svårt att välja en, men just nu lyssnar jag mycket på DAISIES - Justin Bieber"
                }
              </p>
              <p>
                <strong>Känt citat:</strong>
                {
                  " Vad är det värsta som kan hända? Det är så vi vågar prova nytt"
                }
              </p>
            </div>
          </div>
        </div>
        
        {/* Felicia */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/felicia-y.png"
              alt="Felicia Ekeljung"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Felicia</span> Ekeljung
            </h2>
            <p className="text-xl font-semibold mt-1">(HR-assistent)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Med erfarenhet från alla roller på McDonald’s och en nuvarande
              roll inom HR arbetar jag för att skapa en trygg och trivsam
              arbetsmiljö. Jag tror på att engagerade medarbetare är nyckeln
              till nöjda gäster – och en hållbar verksamhet.Kul info om mig: jag
              pratar flytande japanska!
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>{" "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>{" "}
              </p>
              <p>
                <strong>Känt citat:</strong>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Annika */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:space-x-reverse md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/Annika-y.png"
              alt="Annika Östlund"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              Annika <span className="text-yellow-400">Östlund</span>
            </h2>
            <p className="text-xl font-semibold mt-1">(Marknad)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              Började 1994 när en utav mina kompisars bror jobbade som
              restaurangchef på McDonalds Skrapan. Vi var 15 år och var lyckliga
              över att kunna tjäna egna pengar. Under åren har jag haft olika
              arbetsuppgifter och tjänster och idag jobbar jag bland annat med
              med vår lokala marknadsföring.
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" Alltid McFeast "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {" Mariners Apartment Complex, Lana del Ray "}
              </p>
              <p>
                <strong>Känt citat:</strong>
                {
                  "  Don’t speak negatively about yourself even as a joke, your body don’t know the difference - Bruce Lee "
                }
              </p>
            </div>
          </div>
        </div>

       
       

       
      


        {/* Yousef */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <div className="flex-shrink-0">
            <img
              src="/Yousef-y.png"
              alt="Yousef Faraj"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-yellow-400">Yousef </span> Faraj
            </h2>
            <p className="text-xl font-semibold mt-1">(Underhållsansvarig)</p>
            <p className="text-gray-800 mt-6 text-base leading-relaxed max-w-2xl">
              När jag var 18 år började jag på McDonalds i Örebro. Jag jobbade
              mest helger och även extra under tiden jag gick i nian på
              högstadiet. Vid ca 25 årsålder fick jag möjligheten att börja
              jobba med underhåll av våra maskiner och då göra det på flera av
              våra restauranger. Idag, 40 år senare är jag fortfarande kvar och
              har hela Sverige som min arbetsyta!
            </p>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Jag beställer helst på McDonalds:</strong>
                {" Big & co + cheeseburgare, dricker såklart fanta exotic! "}
              </p>
              <p>
                <strong>Min favoritlåt:</strong>
                {
                  " Favoritartist är Fairouz"
                }
              </p>
              <p>
                <strong>Känt citat:</strong>
                {
                  " Vem har gjort det här??"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBios;
