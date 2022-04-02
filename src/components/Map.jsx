// NPM packages
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ latitude, longitude }) {
  // Properties
  const position = [latitude, longitude];
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer center={position} zoom={10}>
      <TileLayer attribution={attribution} url={url} />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
