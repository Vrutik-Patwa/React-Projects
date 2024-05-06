import "./App.css";
import { useState } from "react";
import Gameplay from "./Components/Gameplay";
import StartGame from "./Components/StartGame";
function App() {
  const [isGameStarted, setIsGame] = useState(false);
  console.log(isGameStarted);
  const toggleplay = () => {
    setIsGame((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleplay} />}
    </div>
  );
}

export default App;
