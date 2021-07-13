const Button = ({ title, type = "button", cbOnClick }) => {
  return (
    <button type={type} onClick={cbOnClick}>
      {title}
    </button>
  );
};

export default Button;
