"use client";
import React, { useCallback, useState, useRef } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";

// Make sure these env variables are typed in `next.config.js` or `env.d.ts` if needed
const API = process.env.NEXT_PUBLIC_API_KEY as string;
const MapID = process.env.NEXT_PUBLIC_MAP_ID as string;

type RestaurantLocation = {
  lat: number;
  lng: number;
  name: string;
  description: string;
  email: string;
};

const center = {
  lat: 64.79011893265042,
  lng: 16.936433005607128,
};

const restaurantLocations: RestaurantLocation[] = [
  {
    lat: 59.88537,
    lng: 17.66851,
    name: "McDonald's Gränby",
    description: "Takpannegatan 33, 754 60 Uppsala.",
    email: "018322457",
  },
  {
    lat: 59.86914,
    lng: 17.66195,
    name: "McDonald's Uppsala Vaksalagatan",
    description: "Fyra Mackarnas Korsning, Årstagatan 1-3, 754 34 Uppsala.",
    email: "018251687",
  },
  {
    lat: 59.85878,
    lng: 17.68266,
    name: "McDonald's Uppsala Fyrislund",
    description: "Fålhagsleden 73, 754 48 Uppsala",
    email: "018100380",
  },
  {
    lat: 59.272998769703555,
    lng: 15.176824721543834,
    name: "McDonald's Örebro Västhaga",
    description: "Västhagagatan 3, 703 46 Örebro",
    email: "019260066",
  },
  {
    lat: 59.264350359259325,
    lng: 15.19791528644646,
    name: "McDonald's Södermalmsplan ",
    description: "Södermalmsplan 1, 702 44 Örebro",
    email: "019125625",
  },
  {
    lat: 59.2165773731991,
    lng: 15.135437242298986,
    name: "McDonald's Örebro Marieberg",
    description: "Säljarevägen 1, 702 36 Örebro",
    email: "0192779868",
  },
  {
    lat: 59.60942331277929,
    lng: 16.624982684428605,
    name: "McDonald's Hälla",
    description: "Stockholmsvägen 142, 721 34 Västerås",
    email: "021180121",
  },
  {
    lat: 59.63652850123307,
    lng: 16.563926693855255,
    name: "McDonald's Stenby",
    description: "Kraftlinjegatan 1, 721 36 Västerås",
    email: "021810235",
  },
  {
    lat: 59.610845954206276,
    lng: 16.54995267112043,
    name: "McDonald's Västerås Skrapan",
    description: "Aroscenter 1210, 722 10 Västerås",
    email: "021186000",
  },
  {
    lat: 62.38658805911591,
    lng: 17.31823143773136,
    name: "McDonald's Landsvägsallén",
    description: "Landsvägsallén 10, 852 29 Sundsvall",
    email: "063121941",
  },
  {
    lat: 62.44169951129678,
    lng: 17.330247442243316,
    name: "McDonald's Birsta",
    description: "Klökanvägen 3, 863 41 Sundsvall",
    email: "060125134",
  },
  {
    lat: 62.415473486035765,
    lng: 17.34180472671404,
    name: "McDonald's Bydalen",
    description: "Norra Vägen 10D, 856 50 Sundsvall",
    email: "0605845101",
  },
  {
    lat: 59.61316202730057,
    lng: 16.469730124692155,
    name: "McDonald's Erikslund",
    description: "Hallstagårdsgatan 1, 721 38 Västerås",
    email: "021300614",
  },
  {
    lat: 63.17727269741674,
    lng: 14.692525899999234,
    name: "McDonald's Östersund",
    description: "Hagvägen 1A, 831 48 Östersund",
    email: "063121940",
  },
  {
    lat: 62.63396274900053,
    lng: 17.93387854220507,
    name: "McDonald's Härnösand",
    description: "871 45 Härnösand",
    email: "061127325",
  },
  {
    lat: 61.34612531061703,
    lng: 16.391721200000593,
    name: "McDonald's Bollnäs",
    description: "Stadshusvägen 2, 821 42 Bollnäs",
    email: "027815950",
  },
  {
    lat: 59.61703726227633,
    lng: 17.84910042680106,
    name: "McDonald's Märsta",
    description: "Valstavägen 2C, 195 50 Märsta",
    email: "0840066606",
  },
  {
    lat: 61.155137165004454,
    lng: 13.202935626703725,
    name: "McDonald's Lindvallen",
    description: "Lindvallen, 780 91 Sälen",
    email: "028021770",
  },
    {
    lat: 67.84830131350667,
    lng: 20.280394337771668,
    name: "McDonald's Kiruna ",
    description: "Malmvägen, 981 30 Kiruna",
    email: "",
  },
      {
    lat: 59.84726279199007,
    lng: 17.685467278344237,
    name: "McDonald's Boländera ",
    description: "Stångjärnsgatan 10, 753 23 Uppsala",
    email: "",
  },
];
const restaurantLocationsN: RestaurantLocation[] = [
  {
    lat:68.43726333298451,
    lng: 17.41858323099433,
    name: "McDonald's Narvik",
    description: "Bolagsgata 12, 8514 Narvik, Norway.",
    email: "",
  },
   {
    lat:69.64994474103973,
    lng: 18.95584980218695,
    name: "McDonald’s Tromsø",
    description: "Storgata 70, 9008 Tromsø, Norway",
    email: "+4740158786",
  },
   {
    lat:60.794903527535254,
    lng: 10.697699428848882,
    name: "McDonald’s Gjøvik",
    description: "Elvegata 6, 2815 Gjøvik, Norway",
    email: "+4746986751",
  },
     {
    lat:61.771444013119115,
    lng: 9.542493442203806,
    name: "McDonald’s Otta",
    description: "McDonald's, Mullersgate 20, 2670 Otta, Norway",
    email: "+4745853211",
  },
     {
    lat:63.29782664811442,
    lng: 9.834848326498136,
    name: "McDonald’s Orkanger",
    description: "Gjølmesøyvegen 4, 7300 Orkanger, Norway",
    email: "+4745804018",
  },
       {
    lat:63.43492765168486,
    lng: 10.414326700000181,
    name: "McDonald’s Solsiden",
    description: "Beddingen 1, 7042 Trondheim, Norway",
    email: "+4722343441",
  },
     {
    lat:63.40141185750265,
    lng: 10.403371557727992,
    name: "McDonald’s Nidarvoll",
    description: "Baard Iversens veg 2, 7037 Trondheim, Norway",
    email: "+4722343441",
  },
   {
    lat:63.359523254298125,
    lng: 10.378015426630423,
    name: "McDonald’s Tiller",
    description: "Ivar Lykkes veg 2, 7075 Tiller, Norway",
    email: "+4747516941",
  },
   {
    lat:64.01191386154208,
    lng: 11.49132000000211,
    name: "McDonald’s Steinkjer",
    description: "Sjøfartsgata 2, 7714 Steinkjer, Norway",
    email: "+4747514943",
  },
     {
    lat:63.43039978794012,
    lng: 10.394007315420115,
    name: "McDonald’s Trondheim",
    description: "Kongens gate 9, 7013 Trondheim, Norway",
    email: "+4722343441",
  },
       {
    lat:67.27778755563644,
    lng: 14.426463061997987,
    name: "McDonald’s Bodø",
    description: "McDonald's City Nord Bodø, Stormyrveien 20, 8008 Bodø, Norway",
    email: "+4740858276",
  },



];

// Map controller component to handle zoom and center changes
const MapController = ({
  selectedMarker,
  onClose,
}: {
  selectedMarker: RestaurantLocation | null;
  onClose: () => void;
}) => {
  const map = useMap();
  const prevCenterRef = useRef(center);
  const prevZoomRef = useRef(4);

  React.useEffect(() => {
    if (!map) return;

    if (selectedMarker) {
      // Store current position and zoom before changing
      const currentCenter = map.getCenter();
      const currentZoom = map.getZoom();
      
      if (currentCenter) {
        prevCenterRef.current = { lat: currentCenter.lat(), lng: currentCenter.lng() };
      }
      if (currentZoom) {
        prevZoomRef.current = currentZoom;
      }
      
      // Zoom to the selected marker
      map.setCenter(selectedMarker);
      map.setZoom(15);
    } else {
      // Return to original position when marker is closed
      map.setCenter(prevCenterRef.current);
      map.setZoom(prevZoomRef.current);
    }
  }, [selectedMarker, map]);

  return null;
};

const RestaurantsMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] =
    useState<RestaurantLocation | null>(null);

  const handleMarkerClick = useCallback((location: RestaurantLocation) => {
    setSelectedMarker(location);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto text-center">
        
      </div>
      <div className="w-full mt-8 h-[400px]">
        <APIProvider apiKey={API}>
          <Map
            mapId={MapID}
            defaultCenter={center}
            defaultZoom={5}
            className="w-full h-full rounded-lg shadow-md"
          >
            <MapController selectedMarker={selectedMarker} onClose={handleClose} />
            
            {restaurantLocations.map((location, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
                onClick={() => handleMarkerClick(location)}
              >
                <Pin
                  background={"#005583"}
                  glyphColor={"#FFC200"}
                  borderColor={"#005583"}
                />
              </AdvancedMarker>
            ))}
                {restaurantLocationsN.map((location, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
                onClick={() => handleMarkerClick(location)}
              >
                <Pin
                  background={"#DA291C"}
                  glyphColor={"#FFC200"}
                  borderColor={"#DA291C"}
                />
              </AdvancedMarker>
            ))}
            
            {selectedMarker && (
              <InfoWindow
                position={{
                  lat: selectedMarker.lat,
                  lng: selectedMarker.lng,
                }}
                onClose={handleClose}
              >
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {selectedMarker.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {selectedMarker.description}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Telefon: {selectedMarker.email}
                  </p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};

export default RestaurantsMap;