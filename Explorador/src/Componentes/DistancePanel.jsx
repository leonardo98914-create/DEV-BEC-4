function DistancePanel({ distance, setDistance }) {
  return (
    <div>
      <h2>🌌 Distancia Recorrida</h2>

      <p>{distance} años luz</p>

      <button
        onClick={() => setDistance(distance + 10)}
      >
        Avanzar 10 años luz
      </button>
    </div>
  );
}

export default DistancePanel;