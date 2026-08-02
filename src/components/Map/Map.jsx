import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
export default function Map() {
  const position = [51.505, -0.09];
  return (
    <div className="map-container">
      <MapContainer
        className="map"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            125 Fleet Street, London, EC4A 2BU, United Kingdom
            <br />
            tel:+1-888-878-3227
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
