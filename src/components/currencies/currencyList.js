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
    <section className="currencies">
      <h1 className="title">Stats by currency</h1>
      <ul className="countryList">
        {Object.entries(currencyData.currenciesData).map((el) => {
          return <CurrencyCard key={el[0]} curCode={el[0]} curName={el[1]} />;
        })}
      </ul>
    </section>
  );
}

export default CurrencyList;
