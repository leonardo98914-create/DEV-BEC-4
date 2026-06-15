function InputGuess({
  guess,
  setGuess,
  checkGuess,
}) {
  return (
    <div>
      <input
        type="number"
        placeholder="Ingresa un número"
        value={guess}
        onChange={(e) =>
          setGuess(e.target.value)
        }
      />

      <button onClick={checkGuess}>
        Adivinar
      </button>
    </div>
  );
}

export default InputGuess;