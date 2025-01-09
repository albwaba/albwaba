import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useGeoLocation } from "../contexts/Geolocation";
export default function Map() {
  const markerIcon = new L.Icon({
    iconUrl: "marker.png",
    iconRetinaUrl: "marker.png",
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });
  const {
    locationInfo: { lat, lng, cityName },
    getCityInfo,
    getMyPosition,
    isLoading,
  } = useGeoLocation();

  return (
    <MapContainer
      className="h-full w-full"
      center={[lat, lng]}
      zoom={13}
      attributionControl={false}
      scrollWheelZoom={true}
    >
      <TileLayer
        opacity={1}
        attribution=' <a  href="https://www.openstreetmap.org/copyright">البوابة العقارية</a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={markerIcon} position={[lat, lng]} />
      <DetectClick getCityInfo={getCityInfo} />
      <span
        onClick={getMyPosition}
        className="absolute z-[999] bottom-4 font-semibold  right-1/2 translate-x-1/2 bg-secondary rounded text-text p-2"
      >
        أظهار موقعي الحالي
      </span>
      <ChangeCenter position={[lat, lng]} />
    </MapContainer>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  map.setMinZoom(1);
  return null;
}

function DetectClick({ getCityInfo }) {
  useMapEvent({
    click: async (e) => {
      await getCityInfo(e.latlng.lat, e.latlng.lng);
    },
  });
}
