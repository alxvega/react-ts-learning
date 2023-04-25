interface Props {
  wave: boolean;
  onClick: () => void;
}

const Wave = ({ wave, onClick }: Props) => {
  return <button onClick={onClick}> {wave ? "Goodbye!" : "Hi!!"}</button>;
};

export default Wave;
