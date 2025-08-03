'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const friesIcon = L.icon({
  iconUrl: '/french-fries.png', // no import!
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
// Define the restaurant location interface
interface RestaurantLocation {
  lat: number;
  lng: number;
  name: string;
  description: string;
  email: string;
}

// Restaurant data
const restaurants: RestaurantLocation[] = [
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
  }
];



const SwedenMap = () => {
  return (
  
    <div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Våra Restauranger i <span className="text-[#F9D00F]">Sverige</span>
        </h2>
      </div>

      <div className="mt-10">
        <MapContainer
          center={[62, 16]}
          zoom={5.5}
          minZoom={4.5}
          maxZoom={8}
          scrollWheelZoom={true}
          maxBounds={[
            [54.5, 10],
            [70.5, 25.5],
          ]}
          style={{ height: '90vh', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
         {restaurants.map((restaurant, index) => (
  <Marker
    key={index}
    position={[restaurant.lat, restaurant.lng]}
    icon={friesIcon}
  >
    <Popup>
      <strong>{restaurant.name}</strong><br />
      {restaurant.description}<br />
      📞 {restaurant.email}
    </Popup>
  </Marker>
))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SwedenMap;