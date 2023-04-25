interface Props {
  message: string;
  onClick: () => void;
  status: boolean;
}

const Button = ({ message, onClick }: Props) => {
  return <button onClick={onClick}>{message}</button>;
};

export default Button;
