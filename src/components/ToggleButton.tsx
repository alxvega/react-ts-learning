import { useState } from "react";

interface Props {
  states: Array<string>;
  defaultState: string;
  disabled?: boolean;
}

const ToggleButton = ({ states, defaultState, disabled }: Props) => {
  const [stateIndex, setStateIndex] = useState(states.indexOf(defaultState));

  const handleClick = () => {
    const nextStateIndex =
      stateIndex === states.length - 1 ? 0 : stateIndex + 1;
    setStateIndex(nextStateIndex);
  };

  const currentState = states[stateIndex];

  return (
    <button
      onClick={handleClick}
      disabled={disabled}>
      {currentState}
    </button>
  );
};

export default ToggleButton;
