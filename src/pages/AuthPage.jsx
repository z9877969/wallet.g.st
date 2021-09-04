import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { userLogin, userRegister } from "../redux/auth/authOperations";

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();

  const {
    params: { authType },
  } = match;

  const handleSubmit = (dataUser) => {
    authType === "login"
      ? dispatch(userLogin(dataUser))
      : dispatch(userRegister(dataUser));
  };

  return <AuthForm authType={authType} handleSubmit={handleSubmit} />;
};

export default AuthPage;
