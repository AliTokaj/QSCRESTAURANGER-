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
        <AccordionTrigger className="text-1xl md:text-2xl lg:text-3xl text-yellow-400 font-bold">Hur söker jag jobb hos er?
</AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          <p>
         På länken kan du söka våra annonserade tjänster och ladda upp ditt CV och personliga brev.
Lycka till!
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
    </Accordion>
  )
}
