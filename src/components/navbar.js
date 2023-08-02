/*eslint-disable */
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <li id="back"></li>
      </NavLink>
      <p>All currencies</p>
      <ul>
        <li id="mic"></li>
        <li id="settings"></li>
      </ul>
    </nav>
  );
}

export default Navbar;
