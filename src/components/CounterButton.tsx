import { useState } from "react";

interface Props {
  initialCount: number;
  maxCount: number;
}

const Button = ({ initialCount, maxCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(count - initialCount);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={handleIncrement}
        disabled={maxCount === count}>
        Increment
      </button>
      {maxCount === count && (
        <button
          onClick={handleReset}
          disabled={maxCount !== count}>
          Reset :)
        </button>
      )}
    </div>
  );
};

export default Button;
