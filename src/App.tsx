import "./App.css";
import Wave from "./components/Wave";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [wave, setWave] = useState(false);
  const [waveTwo, setWaveTwo] = useState(!wave);
  const [invert, setInvert] = useState(false);

  const handleWave = () => {
    setWave(!wave);
  };

  const handleSecondWave = () => {
    setWaveTwo(!waveTwo);
  };
  const handleInvert = () => {
    setInvert(!invert);
  };

  return (
    <div className='App'>
      <Wave
        wave={invert ? !wave : wave}
        onClick={handleWave}
      />
      <Wave
        wave={invert ? !waveTwo : waveTwo}
        onClick={handleSecondWave}
      />
      <Button
        message={"Invert!"}
        onClick={handleInvert}
        status={wave || waveTwo}
      />
    </div>
  );
}

export default App;
