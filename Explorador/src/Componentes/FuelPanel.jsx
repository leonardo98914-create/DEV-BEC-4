function FuelPanel({ fuel, setFuel }) {
  return (
    <div>
      <h2>⛽ Combustible</h2>

      <p>{fuel}%</p>

      <button
        onClick={() =>
          setFuel(prev => Math.max(prev - 10, 0))
        }
      >
        Consumir combustible
      </button>
    </div>
  );
}

export default FuelPanel;