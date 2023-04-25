interface LikeProps {
  likes: number;
  onClick: () => void;
}

const LikeButton = ({ likes, onClick }: LikeProps) => {
  return (
    <div>
      <button onClick={onClick}>Like</button>
      <span>{likes}</span>
    </div>
  );
};

export default LikeButton;
