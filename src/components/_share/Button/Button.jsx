const Button = ({ title, type = "button", style, cbOnClick }) => {
  return (
    <button type={type} style={style} onClick={cbOnClick}>
      {title}
    </button>
  );
};

export default Button;
