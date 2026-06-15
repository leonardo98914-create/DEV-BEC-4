import { useState } from "react";
import Dashboard from "./Componentes/Dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  return (
    <>
      <h1>🚀 Space Explorer</h1>

      <button onClick={() => setShowDashboard(!showDashboard)}>
        {showDashboard ? "Apagar Panel" : "Encender Panel"}
      </button>

      {showDashboard && <Dashboard />}
    </>
  );
}

export default App;