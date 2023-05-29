import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "~/styles/leaflet.css";
import Loading from "../loading";
import { v4 as uuidv4 } from "uuid";
import pin from "~/assets/map-pin.svg";
import { Card, CardTitle } from "../ui";
import { useGetCovidStatsByCountry } from "~/hooks/api";

/* Changing marker icon from default to custom (default icon
  somehow stopped loading when I changed map styling) */
const icon = L.icon({
  iconUrl: pin,
  iconRetinaUrl: pin,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

/* Restricting map bounds */
const southEast = L.latLng(-90, 180),
  northWest = L.latLng(90, -180),
  bounds = L.latLngBounds(southEast, northWest);

const Map = () => {
  const { data, isLoading } = useGetCovidStatsByCountry();

  /* Handling case if data was not loaded. Either loading spinner or message with error */
  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center aspect-[920/460] gap-10">
        <p> {isLoading ? "Loading map" : "Data was not found"}</p>
        {isLoading && <Loading />}
      </div>
    );
  }
  return (
    <MapContainer
      bounds={bounds}
      scrollWheelZoom={true}
      maxBounds={bounds}
      minZoom={2}
      maxBoundsViscosity={1}
    >
      <TileLayer
        noWrap={true}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ul>
        {/* Mapping through all the markers */}
        {data.map((country) => (
          <li key={country.countryInfo._id ?? uuidv4()}>
            <Marker
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={icon}
            >
              <Popup>
                <Card className="border-none">
                  <CardTitle>{country.country}</CardTitle>
                  <div className="flex flex-col mt-2">
                    <span>{`Active cases: ${country.active}`}</span>
                    <span>{`Deaths: ${country.deaths}`}</span>
                    <span>{`Recovered: ${country.recovered}`}</span>
                  </div>
                </Card>
              </Popup>
            </Marker>
          </li>
        ))}
      </ul>
    </MapContainer>
  );
};

export default Map;
