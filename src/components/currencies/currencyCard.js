/*eslint-disable */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCountryCode } from "../../redux/currency/currencySlice";

function CurrencyCard({ curName, curCode }) {
  const dispatch = useDispatch();
  function handleCurrencyClick(e) {
    const { code } = e.target.dataset;
    dispatch(setCountryCode(code));
  }
  return (
    <li>
      <NavLink
        to="/details"
        onClick={(e) => handleCurrencyClick(e)}
        data-code={curCode}
      >
        Name: {curName}
        <br></br>
        Code: {curCode}
      </NavLink>
    </li>
  );
}

export default CurrencyCard;
