// components/EmployeeSection.tsx
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import linImage from "../assets/Lin.png";

interface EmployeeCardProps {
  name: string;
  role: string;
  quote: string;
    imageSrc: string | StaticImageData;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  role,
  quote,
  imageSrc,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Antal tecken innan "Visa mer" visas
  const shouldTruncate = quote.length > maxLength;

  return (
    <div className="flex items-center space-x-4 max-w-sm w-full sm:w-auto">
      <div className="rounded-full overflow-hidden border-2 border-white flex-shrink-0">
        <Image src={imageSrc} alt={name} width={150} height={150} />
      </div>
      <div>
        <p className="text-xl md:text-2xl font-display font-bold">{name}</p>
        <p className="text-sm font-bold">{role}</p>
        <div className="text-sm italic mt-1">
          "
          {shouldTruncate && !isExpanded
            ? quote.substring(0, maxLength) + "..."
            : quote}
          "
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-xs font-bold underline hover:no-underline"
            >
              {isExpanded ? "Visa mindre" : "Visa mer"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const EmployeeSection = () => {
  return (
    <div className="relative bg-[#ffbb0e] py-16 px-4 sm:px-6 text-black mt-20">
      <h2 className="max-w-6xl mx-auto text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
        Några av våra medarbetare
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <EmployeeCard
            name="Stella"
            role="Guest Experience Leader"
            quote="Roligast med att vara GEL: Allt, men att träffa olika människor och att göra det lilla extra för att göra deras dag bättre. Jag ville bli GEL för att det verkade roligt, utvecklande och jag ville bidra för att skapa en bättre gästupplevelse."
            imageSrc="/Stella.png"
          />
          <EmployeeCard
            name="Mustafa"
            role="Restaurangchef"
            quote="Det roligaste med jobbet är miljön och alla fantastiska kollegor – vi har en riktig familjekänsla här. Det gör att varje dag blir både rolig och motiverande.

Det lockade mig till att göra karriär på McDonald's är att jag gillar att utmana mig själv och prova nya saker. I RC rollen får jag hela tiden utvecklas och testa mycket nytt, vilket gör jobbet extra spännande."
            imageSrc="/mustafa.jpg"
          />
          <EmployeeCard
            name="Linnéa"
            role="Restaurangchef"
            quote="Det roligaste med mitt jobb är att jag får möjligheten att skapa en arbetsplats där medarbetarna trivs, tycker att det är roligt att komma till jobbet och att de vill stanna och utvecklas. Jag tycker det är väldigt givande att kunna erbjuda utvecklingsmöjligheter till alla och se dem ta mer ansvar och växa i sina roller.

Det som fick mig att vilja bli restaurangchef var att jag tidigare arbetade med HR och rekrytering inom organisationen. Jag var med och anställde samt utbildade alla nya medarbetare till nya Marieberg, och det var så roligt att få följa deras utveckling. Det inspirerade mig till att vilja bli restaurangchef, för att kunna fortsätta med just det – att se människor växa och utvecklas."
              imageSrc={linImage}

          />
          <EmployeeCard
            name="Erik"
            role="Skiftledare"
            quote="Jag älskar att jobba som Skiftledare på McDonald's. Mitt jobb ger mig utbildnings och utvecklingsmöjligheter för både mig själv och mina kollegor. Att ha ansvar över ett skift och påverka både driften och medarbetarnas utveckling är någonting jag verkligen brinner för!"
            imageSrc="/Erik.png"
          />
          <EmployeeCard
            name="Emmie"
            role="Handledare"
            quote="Det bästa med att jobba på McDonald's enligt mig är gemenskapen man får med kollegorna, att få leverera god mat som uppskattas av gästerna och se de nöjda. Jag uppskattar att jag fått möjligheter att utvecklas och ser fram emot att ta mig an rollen som handledare. Som handledare är det så roligt att se utvecklingen hos de nyanställda och få chansen att både hjälpa och stötta dem längst vägen."
            imageSrc="/Emmie.png"
          />
          <EmployeeCard
            name="Cassandra"
            role="Barista ledare"
            quote="Som Barista ledare har jag haft många minnesvärda stunder i McCaféet. Men det bästa jag vet med att vara Barista ledare är utbildningarna jag håller i för nya Baristor. Det är härligt att se nyfikenheten hos andra byggas upp till kunskap och egna erfarenheter. 
Jag hittade samma nyfikenhet och kunskap igenom min egna utbildning för ett par år sedan som fick mig att inse hur mycket jag älskar Mccafé delen i mitt jobb. Därför valde jag att försöka utveckla min kunskap vidare för att kunna leverera en bättre Mccafé upplevelse för både gäster och medarbetare."
            imageSrc="/Cassandra.png"
          />
          <EmployeeCard
            name="Alice"
            role="Första assistent"
            quote="Det bästa med att vara första assistent är att få se hur vårt team växer varje dag, och hur mycket starkare vi kan vara tillsammans. Jag älskar att lära andra nya saker, och jag lär mig själv massor av nya saker varje dag, vilket gör att jag utvecklas som person.

Det som fick mig att vilja bli första assistent är flera anledningar. Men jag tror att de största anledningarna är att jag vill vara med och påverka och utveckla restaurangen framåt. Dessutom har jag alltid sett upp till mina chefer och nu vill jag bli som dem, en ledare som andra kan se upp till."
            imageSrc="/Alice.png"
          />
          <EmployeeCard
            name="Monir"
            role="Andra assistent"
            quote="Det bästa med mitt jobb är att jag får möta och samarbeta med så många olika människor. Varje dag bjuder på nya möten, erfarenheter och möjligheter att utvecklas – både som person och i min roll.

Anledningen till att jag sökte mig till min nuvarande roll var viljan att ta mer ansvar och att ständigt utmana mig själv. Det jag uppskattar allra mest är att få vara med och utbilda nya kollegor och välkomna dem till vårt team."
            imageSrc="/Monir.png"
          />
          <EmployeeCard
            name="Alfred"
            role="Medarbetare"
            quote="Mitt första intryck av McDonalds var att jag blev fascinerad av hur snabbt allt gick. Trots en bra introduktion kändes det långt bort att jag skulle hålla samma tempo som mina kollegor ute på golvet. Men på de drygt 10 pass jag har jobbat har jag lärt mig otroligt mycket tack vare fantastiska kollegorna. Nu ser jag fram emot att fortsätta utvecklas och i framtiden bli lika skicklig och bra på att lära ut som mina kollegor."
            imageSrc="/alfred.png"
          />
        </div>
      </div>
      {/* Wave at the bottom */}
      <div className="absolute bottom-0 right-0 translate-y-full w-full sm:w-1/2 md:w-1/2">
        <Image
          src="/Vector.svg"
          alt="Wave divider"
          width={400}
          height={200}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </div>
  );
};

export default EmployeeSection;