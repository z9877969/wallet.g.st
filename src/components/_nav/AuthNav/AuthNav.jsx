import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/auth/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/auth/register">SignUp</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
