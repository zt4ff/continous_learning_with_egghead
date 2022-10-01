import React, { useEffect } from "react";
import "./assets/stylesheets/App.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { config } from "dotenv";

import Layout from "./components/Layout";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

config();

function App() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <Layout>
      <MapContainer center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
          attribution="Copyright belongs to Open Street map"
        />
        <Marker position={[38.907132, -77.036546]} />
      </MapContainer>
    </Layout>
  );
}

export default App;
