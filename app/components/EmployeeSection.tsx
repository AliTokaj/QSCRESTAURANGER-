// components/EmployeeSection.tsx
import Image from "next/image";

interface EmployeeCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  role,
  quote,
  imageSrc,
}) => (
  
  <div className=" flex items-center space-x-4 max-w-sm w-full sm:w-auto ">
    <div className=" rounded-full overflow-hidden border-2 border-white flex-shrink-0">
      <Image
        src={imageSrc}
        alt={name}
        width={120}
        height={120}
        
       
      />
    </div>
    <div>
      <p className="font-bold">{name}</p>
      <p className="text-sm">{role}</p>
      <p className="text-sm italic mt-1">"{quote}"</p>
    </div>
  </div>
  
);

const EmployeeSection = () => {
  return (  
   
    <div className="relative bg-[#ffbb0e] py-16 px-4 sm:px-6 text-black mt-20">
      <h2 className="max-w-6xl mx-auto text-3xl  md:text-4xl font-bold mb-6 sm:mb-10 ">
        Några av våra medarbetare
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 ">
        <EmployeeCard
          name="Agnes"
          role="Skiftledare"
          quote="Det roligaste med att jobba på McDonald's är de utmaningar man ställs inför. Det är det som gör att man utvecklas."
          imageSrc="/agnes.jpeg" 
        />
        <EmployeeCard
          name="Mustafa"
          role="Restaurangchef"
          quote="Det bästa med att vara restaurangchef på McDonald's är att se mina medarbetare växa och ta nästa steg i sin karriär."
          imageSrc="/mustafa.jpg"
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
    />
</div>
      
    </div>


   
  );
};

export default EmployeeSection;
