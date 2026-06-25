import { useNavigate } from "react-router-dom";

function Button({ to, onClick, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked"); // debug

    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;