import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Example location (Kolkata)
const position = [22.5726, 88.3639];

function MapSection() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            OUR LOCATION
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Visit
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Our Office
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Find us on the map. In the future, this map will also display
            bus locations, routes, and traffic information.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/20">

          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="h-[550px] w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                <strong>TransitInsight AI</strong>
                <br />
                Kolkata, West Bengal
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </div>

    </section>
  );
}

export default MapSection;
