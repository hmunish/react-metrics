import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCountryCode,
  fetchAllCurrencies,
  handleSearch,
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
    return (
      <p className="status" data-testid="error-msg">
        {currencyData.isError}
      </p>
    );
  }
  const arr = Object.entries(currencyData.currenciesData).slice(0, 8);

  if (currencyData.curCountryCode !== "") {
    return <p className="status">Loading...</p>;
  }

  return (
    <section className="currencies">
      <input
        id="search-bar"
        className="hidden"
        placeholder="Search"
        onKeyUp={(e) => dispatch(handleSearch(e.target.value))}
      />
      <div className="overview">
        <div />
        <h3>World currencies names</h3>
      </div>
      <h1 className="title">Stats by currency</h1>
      <ul className="countryList">
        {arr.map((el) => (
          <CurrencyCard key={el[0]} curCode={el[0]} curName={el[1]} />
        ))}
      </ul>
    </section>
  );
}

export default CurrencyList;
