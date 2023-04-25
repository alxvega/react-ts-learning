import "./App.css";
import { useState } from "react";
import LikeButton from "./components/LikeButton";

function App() {
  const [likes, setLikes] = useState<number>(0);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className='App'>
      <LikeButton
        likes={likes}
        onClick={handleLikeClick}
      />
      <input
        type='number'
        value={likes}
        onChange={(e) => setLikes(parseInt(e.target.value))}
      />
    </div>
  );
}

export default App;
