import { useEffect } from "react";

function StatusPanel({ fuel }) {

  useEffect(() => {
    console.log("🛰️ Estado revisado");
  }, [fuel]);

  let status = "Óptimo";

  if (fuel < 50) {
    status = "Precaución";
  }

  if (fuel < 20) {
    status = "Crítico";
  }

  return (
    <div>
      <h2>🛰️ Estado de la Nave</h2>
      <p>{status}</p>
    </div>
  );
}

export default StatusPanel;