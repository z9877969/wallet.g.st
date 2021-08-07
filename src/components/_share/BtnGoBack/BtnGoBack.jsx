import { useHistory } from "react-router-dom";
import Button from "../Button/Button";

const BtnGoBack = ({ title, type }) => {
  const { push, location } = useHistory();

  const handleGoBack = () => push(location.state?.from || "/");

  return <Button title={title} type={type} cbOnClick={handleGoBack} />;
};

export default BtnGoBack;
