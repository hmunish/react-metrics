/*eslint-disable */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCountryCode,
  fetchAllCurrencies,
} from "../../redux/currency/currencySlice";
import CurrencyCard from "./currencyCard";

function CurrencyList() {
  const currencyData = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCurrencies());
    dispatch(clearCountryCode());
  }, [dispatch]);

  if (currencyData.isLoading) return <p className="status">Loading...</p>;
  if (currencyData.isError) {
    return <p className="status">{currencyData.isError}</p>;
  }
  return (
    <ul>
      {Object.entries(currencyData.currenciesData).map((el) => (
        <li key={el[0]}>
          <CurrencyCard curCode={el[0]} curName={el[1]} />
        </li>
      ))}
    </ul>
  );
}

export default CurrencyList;
