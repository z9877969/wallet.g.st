import { useState } from "react";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";
import { userLogin, userRegister } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const AuthForm = ({ authType, handleSubmit }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <LabelInput
        title={"Email"}
        name="email"
        value={email}
        placeholder="Input email..."
        cbOnChange={handleChange}
      />
      <LabelInput
        title={"Password"}
        name="password"
        value={password}
        placeholder="Input password..."
        cbOnChange={handleChange}
      />
      <Button
        title={authType === "login" ? "Login" : "Register"}
        type="submit"
      />
    </form>
  );
};

export default AuthForm;
