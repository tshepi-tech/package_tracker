// NPM packages
import { Map as LeafletMap, TileLayer, Marker } from "react-leaflet";

export default function Map({ coordinates }) {
  // Constants
  const zoomLevel = 15;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

  return (
    <LeafletMap className="map" center={coordinates} zoom={zoomLevel}>
      <TileLayer url={mapURL} attribution={attribution} />
      <Marker position={coordinates} />
    </LeafletMap>
  );
}
