import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function KommunLista() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

interface Area {
    name: string;
    restaurants: string[];
}

const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index); // bara en öppen åt gången
};

  const areas = [
    {
      name: "Östersund",
      restaurants: ["Norr", "Lillänge"],
    },
    {
      name: "Härnösand",
      restaurants: [],
    },
    {
      name: "Sundsvall",
      restaurants: ["Bydalen", "Birsta", "Landsvägsallén"],
    },
    {
      name: "Bollnäs",
      restaurants: [],
    },
    {
      name: "Sälen",
      restaurants: [],
    },
    {
      name: "Örebro",
      restaurants: ["Marieberg", "Västhaga", "Södermalmsplan"],
    },
    {
      name: "Uppsala",
      restaurants: [
        "Gränby",
        "Fyrislund",
        "Vaksala",
        "Boländerna (öppnar Q4 2025)",
      ],
    },
    {
      name: "Västerås",
      restaurants: ["Erikslund", "Hälla", "Stenby", "Skrapan"],
    },
    {
      name: "Märsta",
      restaurants: [],
    },
    {
      name: "Kiruna (TBA)",
      restaurants: ["Malmvägen, 981 30 Kiruna"],
    },
  ];

  return (
<section className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-white">
  <ul className="divide-y divide-gray-200">
    {areas.map((area, index) => (
      <li key={area.name} className="py-3">
        {/* Kommunrad */}
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition"
        >
          <span>{area.name}</span>
          {openIndex === index ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>

        {/* Restauranger */}
        {openIndex === index && area.restaurants.length > 0 && (
          <ul className="mt-2 ml-4 space-y-1 text-gray-600">
            {area.restaurants.map((rest) => (
              <li key={rest} className="pl-2 border-l border-gray-300">
                {rest}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</section>
  );
}
