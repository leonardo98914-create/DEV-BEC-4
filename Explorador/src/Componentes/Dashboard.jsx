import { useState, useEffect } from "react";
import FuelPanel from "./FuelPanel";
import DistancePanel from "./DistancePanel";
import PlanetList from "./PlanetList";
import StatusPanel from "./StatusPanel";

function Dashboard() {
  const [distance, setDistance] = useState(0);
  const [fuel, setFuel] = useState(100);

  console.log("Dashboard renderizado");

  useEffect(() => {
    console.log("🚀 Dashboard montado");

    return () => {
      console.log("🛑 Dashboard desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("📍 Distancia actualizada:", distance);
  }, [distance]);

  useEffect(() => {
    console.log("⛽ Combustible actualizado:", fuel);
  }, [fuel]);

  return (
    <div>
      <DistancePanel
        distance={distance}
        setDistance={setDistance}
      />

      <FuelPanel
        fuel={fuel}
        setFuel={setFuel}
      />

      <StatusPanel fuel={fuel} />

      <PlanetList />
    </div>
  );
}

export default Dashboard;