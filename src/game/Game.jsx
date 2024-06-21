import background from "../../public/assets/background.png";
import { useState, useEffect, useRef } from "react";
import Ground from "../components/Ground";

const Game = () => {
  const [birdY, setBirdY] = useState(200);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const birdRef = useRef();

  useEffect(() => {
    if (isRunning) {
      const gameInterval = setInterval(() => {
        setBirdY((y) => Math.min(y + birdVelocity, window.innerHeight - 100));
        setBirdVelocity((v) => v + 1);
      }, 30);

      return () => clearInterval(gameInterval);
    }
  }, [isRunning, birdVelocity]);

  const handleSpaceBar = (e) => {
    if (e.keyCode === 32 || e.type === "touchstart") {
      setBirdVelocity(-10); // -flap
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSpaceBar);
    window.addEventListener("touchstart", handleSpaceBar);
    return () => {
      window.removeEventListener("keydown", handleSpaceBar);
      window.removeEventListener("touchstart", handleSpaceBar);
    };
  });

  const startGame = () => {
    setIsRunning(true);
    setBirdY(200);
    setBirdVelocity(0);
  };

  return (
    <div
      onClick={startGame}
      style={{
        overflow: "hidden",
        height: "100vh",
        backgroundColor: "#121212",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        ref={birdRef}
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          top: `${birdY}px`,
          left: "50px",
        }}
      ></div>
      <Ground />
    </div>
  );
};

export default Game;
