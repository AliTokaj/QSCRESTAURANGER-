import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Vilken ålder måste man ha för att arbeta på McDonald’s?
</AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          <p>
     För de flesta arbetsuppgifter krävs det att du har fyllt 16 år. I vissa fall kan vi anställa personer som är 15 år och snart fyller 16. För arbetsledande roller och andra särskilda befattningar kan högre ålder vara ett krav.


          </p>
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Vad får man för lön hos er?
</AccordionTrigger>
        <AccordionContent className=" text-base md:text-lg">
          <p>
           Hos oss på McDonald’s, via QSC Restauranger AB, följer vi gällande kollektivavtal, vilket innebär att din lön sätts utifrån tydliga kriterier som ålder och erfarenhet i branschen. Men det stannar inte där. Vi tror på att belöna ansvar och ambition. Därför har du möjlighet till löneutveckling kopplad till din roll och ditt ansvar i restaurangen. Ju mer du växer i din roll, desto mer kan du påverka din lön.
          </p>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Måste jag ha tidigare erfarenhet för att jobba på McDonald’s?
</AccordionTrigger>
        <AccordionContent className=" text-base md:text-lg">
          <p>
            Nej, det behöver du inte!
Vi utbildar dig från grunden. Många av våra medarbetare börjar sitt allra första jobb hos oss. Du får en tydlig introduktion, bra handledning och möjlighet att växa i din egen takt.


          </p>
          
        </AccordionContent>
      </AccordionItem>

         <AccordionItem value="item-4">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Erbjuder ni sommarjobb eller extrajobb för studenter?
</AccordionTrigger>
        <AccordionContent className=" text-base md:text-lg">
          <p>
            Ja, många av våra restauranger anställer extra personal under sommaren, kvällar och helger. Utbudet varierar beroende på restaurangens behov.




          </p>
          
        </AccordionContent>
      </AccordionItem>

          <AccordionItem value="item-5">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Finns det möjlighet att utvecklas och göra karriär på McDonald’s?

</AccordionTrigger>
        <AccordionContent className=" text-base md:text-lg">
          <p>
            Ja. McDonald’s har väl utvecklade interna utbildningsprogram. Många av våra restaurangchefer och arbetsledare har börjat som medarbetare i kök eller kassa.






          </p>
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Hur fungerar schemaläggningen på McDonald’s?


</AccordionTrigger>
        <AccordionContent className=" text-base md:text-lg">
          <p>
            Schemat planeras utifrån restaurangens behov och medarbetarnas tillgänglighet. Vi använder ett digitalt system där du kan se ditt schema och boka på extra arbetspass. Målet är att skapa balans mellan vårt behov och medarbetarnas önskemål, exempelvis vid studier eller andra åtaganden.








          </p>
          
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}
