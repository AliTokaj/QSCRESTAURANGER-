// app/integritetspolicy/page.tsx
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#ffbb0e] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-black mb-4 mt-20">
            Integritetspolicy
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl">
            Vi värnar om din personliga integritet och är måna om att
            dataskyddsförordningen efterlevs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            1. Allmänt
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Vi på QSC Restauranger AB (nedan ”QSC Restauranger”, ”oss”, ”vi”)
            värnar om din personliga integritet och är måna om att
            dataskyddsförordningen (EU 2016/679), (nedan ”GDPR”) och annan
            tillämplig dataskyddslagstiftning efterlevs. I detta
            integritetsmeddelande förklarar QSC Restauranger hur vi samlar in
            och behandlar dina personuppgifter när du söker arbete hos oss,
            besöker vår webbplats, företräder eller utgör kontaktperson till
            någon av våra leverantörer, samt när du kontaktar oss via vår
            webbplats eller på annat sätt. Vi förklarar även i
            integritetsmeddelandet vilka rättigheter du har enligt GDPR.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            2. Personuppgiftsansvarig
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-base md:text-lg text-gray-800 mb-2">
              <strong>QSC Restauranger AB</strong>
            </p>
            <p className="text-base text-gray-700">Org. nr. 556632-6475</p>
            <p className="text-base text-gray-700">
              Adress: Stensborgsgatan 4, 721 32 Västerås
            </p>
            <p className="text-base text-gray-700">Telefon: 021-13 40 49</p>
            <p className="text-base text-gray-700">
              E-post:{" "}
              <a
                href="mailto:qsc-hr@se.mcd.com"
                className="text-[#ffbb0e] hover:underline"
              >
                qsc-hr@se.mcd.com
              </a>
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            3. Vilka personuppgifter behandlar vi?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Som arbetssökande:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>
                  Identitets- och kontaktuppgifter om dig, dvs. förnamn,
                  efternamn, adress, e-postadress, telefonnummer, ålder, bild
                  samt videoupptagning.
                </li>
                <li>
                  Bakgrunds- och rekryteringsrelaterad information om dig, dvs.
                  utbildningar och andra kvalifikationer, tidigare
                  anställningar, referenser, anteckningar från intervjuer, CV
                  samt personligt brev.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Som webbplatsbesökare:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>
                  Vi behandlar inga personuppgifter om dig när du besöker vår
                  webbplats. Vi använder inga cookies, loggar inga IP-adresser
                  och samlar inte in någon form av användargenererad data eller
                  enhetsinformation. Besöket kan därför genomföras helt utan
                  spårning.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                Som företrädare eller kontaktperson för leverantör:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>
                  Identitets- och kontaktuppgifter om dig, dvs. förnamn,
                  efternamn, adress, e-postadress, telefonnummer, befattning
                  samt det bolag eller organisation som du företräder.
                </li>
                <li>
                  Betalnings- och fakturauppgifter om du är enskild
                  näringsidkare, dvs. bankkontonummer, personnummer och annan
                  nödvändig fakturainformation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                När du kontaktar oss:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>
                  Identitets- och kontaktuppgifter om dig, dvs. förnamn,
                  efternamn, adress, e-postadress samt telefonnummer samt övriga
                  uppgifter som du lämnar till oss.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            4. Ändamål och rättslig grund för behandlingen
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Nedan beskriver vi de olika ändamål för vilka QSC Restauranger kan
            komma att behandla dina personuppgifter, de typer av personuppgifter
            som kan behandlas samt de rättsliga grunder som vi stödjer
            behandlingarna på. I de fall där den rättsliga grunden är
            intresseavvägning anges även vårt berättigade intresse.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-[#ffbb0e] pl-4">
              <p className="text-gray-800 leading-relaxed">
                Vi behandlar dina personuppgifter som anges ovan vid ansökan om
                arbete för att administrera och säkerställa en kvalificerad
                ansökningsprocess. Den rättsliga grunden för behandlingen är att
                ingå avtal med dig. Vid behov inhämtar QSC även referenser inom
                ramen för ansökningsprocessen. Uppgifter som en referensperson
                lämnar om dig samt kontaktuppgifter till referenspersonen,
                behandlas med stöd av den rättsliga grunden berättigat intresse.
                Vårt berättigade intresse består i att utvärdera arbetssökande
                för att se till att verksamheten bedrivs på ett ändamålsenligt
                sätt, vilket anses väga tyngre än ditt intresse av att hålla
                dina personuppgifter skyddade.
              </p>
            </div>

            <div className="border-l-4 border-[#ffbb0e] pl-4">
              <p className="text-gray-800 leading-relaxed">
                Vi behandlar dina identitets- och kontaktuppgifter för att
                uppfylla avtal och för att administrera en avtalsrelation. Den
                rättsliga grunden för behandlingen är vårt berättigade intresse.
                Vårt berättigade intresse består i att uppfylla våra avtal och
                administrera avtalsrelationer, vilket anses väga tyngre än ditt
                intresse av att hålla dina personuppgifter skyddade.
              </p>
            </div>

            <div className="border-l-4 border-[#ffbb0e] pl-4">
              <p className="text-gray-800 leading-relaxed">
                Vi behandlar dina identitets- och kontaktuppgifter samt
                betalnings- och fakturauppgifter om du är enskild näringsidkare
                för att uppfylla avtal och administrera en avtalsrelation med
                dig. Den rättsliga grunden för behandlingen är att fullgöra
                avtal.
              </p>
            </div>

            <div className="border-l-4 border-[#ffbb0e] pl-4">
              <p className="text-gray-800 leading-relaxed">
                Vi behandlar dina betalnings- och fakturauppgifter om du är
                enskild näringsidkare för att kunna genomföra betalningar. Den
                rättsliga grunden för behandlingen är fullgöra avtal.
              </p>
            </div>

            <div className="border-l-4 border-[#ffbb0e] pl-4">
              <p className="text-gray-800 leading-relaxed">
                Vi behandlar dina identitets- och kontaktuppgifter för att
                kommunicera med dig om du hör av dig till oss via våra
                kommunikationskanaler, t.ex. via kontaktformuläret på vår
                webbplats. Den rättsliga grunden för behandlingen är vårt
                berättigade intresse. Vårt berättigade intresse består i att
                besvara dina synpunkter och frågor, vilket anses väga tyngre än
                ditt intresse av att hålla dina personuppgifter skyddade.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            5. Vilka delar vi personuppgifter med?
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            QSC Restauranger delar endast dina personuppgifter med aktörer som
            behöver dina uppgifter för att uppfylla ändamålen som beskrivs ovan.
            Tredje part i fråga har ingen rätt att använda dina uppgifter för
            eget ändamål. Nedan beskriver vi vilka aktörer som vi kan komma att
            dela dina personuppgifter med:{" "}
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-black mb-2">Leverantörer</h3>
              <p className="text-gray-800">
                Vi använder oss av leverantörer som tillhandahåller tjänster och
                produkter inom IT, affärssystem, CRM-system,
                systemadministration, marknadsföring samt rekrytering. Det
                tecknas personuppgiftsbiträdesavtal med sådana aktörer i
                tillämpliga fall. Den rättsliga grunden för behandlingen är att
                ingå/fullgöra avtal med dig eller våra berättigade intressen.
                Vårt berättigade intresse består i att utvärdera arbetssökanden,
                uppfylla våra avtal och administrera avtalsrelationer,
                marknadsföra vår verksamhet samt besvara inkomna synpunkter och
                frågor.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-black mb-2">
                Professionella rådgivare
              </h3>
              <p className="text-gray-800">
                Vi kan komma att dela dina personuppgifter med professionella
                rådgivare såsom advokater, revisorer och banktjänstepersonal.
                Detta kan ske t.ex. om det skulle uppstå en tvist mellan det
                bolag som du företräder eller är kontaktperson för eller med dig
                som enskild näringsidkare och QSC eller om vi av annan anledning
                behöver stöd av jurist. Den rättsliga grunden för behandlingen
                är vårt berättigade intresse av att tillvarata våra intressen i
                en tvist eller i annat fall tillvarata våra rättsliga intressen.
                För det fall det bolag du företräder eller är kontaktperson för,
                eller du som enskild näringsidkare, är leverantör åt oss kan
                dina personuppgifter komma att delas med våra auktoriserade
                revisorer. Den rättsliga grunden för behandlingen är rättslig
                förpliktelse.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-black mb-2">Myndigheter</h3>
              <p className="text-gray-800">
                Vi kan även komma att dela personuppgifter med myndigheter vid
                begäran eller på egen hand om vi har en rättslig förpliktelse
                att göra det.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            6. Överföringar till tredje land
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            I länder utanför EU/EES gäller inte GDPR, vilket kan innebära en
            ökad risk i integritetshänseende avseende bland annat möjligheten
            för myndigheter i tredje land att få tillgång till dina
            personuppgifter och för möjligheter att utöva kontroll över
            personuppgifterna. Dina personuppgifter behandlas som huvudregel
            inom EU/EES. [Eftersom en del leverantörer till QSC Restauranger
            arbetar internationellt kan dina personuppgifter dock komma att
            överföras till länder utanför EU/EES]. QSC Restauranger har i sådana
            fall en skyldighet att se till att överföringen sker i enlighet med
            tillämplig lagstiftning, till exempel genom att försäkra oss om att
            landet dit personuppgifterna överförs uppfyller krav på adekvat
            skyddsnivå enligt EU-kommissionens beslut, eller genom att
            säkerställa att överföringen omfattas av lämpliga skyddsåtgärder i
            form av till exempel standardavtalsklausuler som EU-kommissionen har
            beslutat om enligt vilka det säkerställs att lämpliga åtgärder
            vidtas för att tillvarata dina rättigheter och friheter.
          </p>
          <p className="text-base text-gray-700">
            Du kan ta del av EU-kommissionens standardiserade avtalsklausuler
            på:{" "}
            <a
              href="https://eurlex.europa.eu/eli/dec_impl/2021/914/oj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffbb0e] hover:underline"
            >
              https://eurlex.europa.eu/eli/dec_impl/2021/914/oj
            </a>
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            7. Säkerhet
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            QSC Restauranger vidtar tekniska och organisatoriska åtgärder för
            att skydda dina personuppgifter mot förlust, missbruk, obehörig
            åtkomst, röjande, ändring och förstöring.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            8. Lagringstid
          </h2>
          <div className="space-y-3">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              QSC Restauranger kommer endast att spara dina personuppgifter så
              länge det är nödvändigt för de ändamål och syften för vilka de
              samlats in.
            </p>

            <div className="bg-[#fff5d6] p-4 rounded-lg space-y-2">
              <p className="text-gray-800">
                <strong>Arbetssökande:</strong> Personuppgifter bevaras inte
                längre än 3 år efter avslutad rekryteringsprocess.
                Spontanansökningar raderas senast 1 år efter mottagande.
              </p>
              <p className="text-gray-800">
                <strong>Leverantörer:</strong> Personuppgifter sparas i 5 år
                efter att leverantörsförhållandet har upphört.
              </p>
              <p className="text-gray-800">
                <strong>Bokföringsmaterial:</strong> Sparas i 7 år efter det
                kalenderår som räkenskapsåret avslutades enligt bokföringslagen.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            9. Dina rättigheter
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
            Som registrerad har du flera rättigheter. Du kan läsa mer om dina
            rättigheter på Integritetsskyddsmyndighetens (IMY) hemsida{" "}
            <a
              href="https://www.imy.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffbb0e] hover:underline"
            >
              www.imy.se
            </a>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                📋 Rätt till information och tillgång
              </h3>
              <p className="text-gray-800 text-sm">
                Du har rätt att få information om vi behandlar personuppgifter
                om dig och få en kopia på dina personuppgifter.
              </p>
            </div>

            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                🗑️ Rätt till radering
              </h3>
              <p className="text-gray-800 text-sm">
                Du har under vissa förutsättningar rätt att få dina
                personuppgifter raderade.
              </p>
            </div>

            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                ✏️ Rätt till rättelse
              </h3>
              <p className="text-gray-800 text-sm">
                Du har rätt att begära att vi rättar eller kompletterar
                uppgifter om dig som är felaktiga eller ofullständiga.
              </p>
            </div>

            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                ⏸️ Rätt till begränsning
              </h3>
              <p className="text-gray-800 text-sm">
                Du har i vissa fall rätt att begära att behandlingen av dina
                personuppgifter begränsas.
              </p>
            </div>

            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                📤 Rätt till dataportabilitet
              </h3>
              <p className="text-gray-800 text-sm">
                Du har rätt att få dina personuppgifter överförda till en annan
                personuppgiftsansvarig under vissa omständigheter.
              </p>
            </div>

            <div className="bg-white border-2 border-[#ffbb0e] p-5 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-lg">
                ✋ Rätt att invända
              </h3>
              <p className="text-gray-800 text-sm">
                Du har rätt att invända mot att vi behandlar personuppgifter om
                dig baserat på berättigat intresse.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            10. Rätt att återkalla samtycke
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            I de fall du har lämnat samtycke har du rätt att när som helst
            återkalla samtycket. Du kan återkalla ditt samtycke genom att
            kontakta oss på{" "}
            <a
              href="mailto:qsc-hr@se.mcd.com"
              className="text-[#ffbb0e] hover:underline"
            >
              qsc-hr@se.mcd.com
            </a>
            . När du har återkallat ditt samtycke kommer vi inte fortsätta att
            behandla dina personuppgifter för aktuellt ändamål.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            11. Klagomål
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Du har rätt att klaga till Integritetsskyddsmyndigheten (IMY) om du
            anser att vi behandlar dina personuppgifter i strid med tillämplig
            dataskyddslagstiftning. Du kan även läsa mer om dina rättigheter på
            IMY:s hemsida:{" "}
            <a
              href="https://www.imy.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffbb0e] hover:underline"
            >
              www.imy.se
            </a>
            .
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            12. Uppdateringar av integritetsmeddelandet
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Vid uppdateringar som är av större betydelse för vår behandling av
            personuppgifter får du information om detta innan uppdateringarna
            börjar gälla. I sådan information förklarar vi även innebörden av
            uppdateringarna och hur de kan påverka dig.
          </p>
        </section>

        {/* Section 13 - Contact */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
            13. Kontaktuppgifter till personuppgiftsansvarig
          </h2>
          <div className="bg-[#ffbb0e] p-6 md:p-8 rounded-lg">
            <p className="text-lg font-bold text-black mb-4">
              Om du har några frågor om detta integritetsmeddelande eller vår
              behandling av personuppgifter, vänligen kontakta oss:
            </p>
            <div className="space-y-2 text-black">
              <p>
                <strong>QSC Restauranger AB</strong>
              </p>
              <p>Att: Helene Sköld</p>
              <p>Stensborgsgatan 4, 721 32 Västerås</p>
              <p>Telefon: 021-13 40 49</p>
              <p>
                E-post:{" "}
                <a
                  href="mailto:qsc-hr@se.mcd.com"
                  className="underline hover:no-underline"
                >
                  qsc-hr@se.mcd.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Last updated */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </p>
        </div>
      </div>
    </div>
  );
}
