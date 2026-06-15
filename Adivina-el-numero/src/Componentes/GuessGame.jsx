import { useState } from "react";
import InputGuess from "./InputGuess";
import Message from "./Message";
import GameStats from "./GameStats";

function GuessGame() {
  const [secretNumber, setSecretNumber] = useState(() =>
  Math.floor(Math.random() * 100) + 1
);

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    const userNumber = Number(guess);

    setAttempts(attempts + 1);

    if (userNumber === secretNumber) {
      setMessage("🎉 ¡Correcto!");
    } else if (userNumber < secretNumber) {
      setMessage("📉 El número es más grande");
    } else {
      setMessage("📈 El número es más pequeño");
    }
  };

  const resetGame = () => {
    setSecretNumber(
      Math.floor(Math.random() * 100) + 1
    );

    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div>
      <h1>🎮 Adivina el Número</h1>

      <InputGuess
        guess={guess}
        setGuess={setGuess}
        checkGuess={checkGuess}
      />

      <Message message={message} />

      <GameStats attempts={attempts} />

      {message === "🎉 ¡Correcto!" && (
        <button onClick={resetGame}>
          Jugar otra vez
        </button>
      )}
    </div>
  );
}

export default GuessGame;