import { useState } from "react";

function PlanetList() {
  const [planets, setPlanets] = useState([]);

  const addPlanet = () => {
    const planetName = `Planeta ${planets.length + 1}`;

    setPlanets([...planets, planetName]);
  };

  return (
    <div>
      <h2>🪐 Planetas Visitados</h2>

      <button onClick={addPlanet}>
        Visitar Planeta
      </button>

      <ul>
        {planets.map((planet, index) => (
          <li key={index}>{planet}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetList;