const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder = "",
  cbOnChange,
  cbOnClick,
}) => {
  return (
    <div>
      <label>
        {title}
        {cbOnChange ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={cbOnChange}
            placeholder={placeholder}
          />
        ) : (
          <input type={type} name={name} value={value} onClick={cbOnClick} />
        )}
      </label>
    </div>
  );
};

export default LabelInput;
