import { useDispatch } from "react-redux";
import { logOutAction } from "../../../redux/auth/authActions";
import Button from "../../_share/Button/Button";

const UserNav = () => {
  const dispatch = useDispatch();
  const logOut = () => dispatch(logOutAction());
  return <Button title="LogOut" cbOnClick={logOut} />;
};

export default UserNav;
