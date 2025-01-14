import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Location({ lat, lng }) {
  const markerIcon = new L.Icon({
    iconUrl: "marker.png",
    iconRetinaUrl: "marker.png",
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });
  return (
    <MapContainer
      className="w-full min-h-40 "
      zoom={13}
      attributionControl={false}
      scrollWheelZoom={true}
      touchZoom={false}
      center={[lat, lng]}
      dragging={false}
    >
      <TileLayer
        opacity={1}
        // attribution=' <a  href="https://www.openstreetmap.org/copyright">البوابة العقارية</a> '
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={markerIcon}
        position={["32.855667359290095", "12.057572922483653"]}
      />
    </MapContainer>
  );
}
