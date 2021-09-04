import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const Nav = ({ isAuth }) => {
  return <header>{isAuth ? <UserNav /> : <AuthNav />}</header>;
};

export default Nav;
