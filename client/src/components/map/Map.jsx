import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function ChangeView({ items }) {
  const map = useMap();

  useEffect(() => {
    if (items.length === 1) {
      map.flyTo([items[0].latitude, items[0].longitude], 13);
    }
  }, [items, map]);

  return null;
}

function Map({ items }) {
  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      zoom={6}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView items={items} />

      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
