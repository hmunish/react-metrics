import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const currencySlice = useSelector((state) => state.currency);
  return (
    <nav data-testid="nav-test">
      <NavLink to="/">
        <li id="back" />
      </NavLink>
      <p>{currencySlice.curCountryCode || "All country currencies"}</p>
      <ul>
        <li id="mic" />
        <li id="settings" />
      </ul>
    </nav>
  );
}

export default Navbar;
