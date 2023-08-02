import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from '../../redux/currency/currencySlice';

function CurrencyDetails() {
  const dispatch = useDispatch();
  const currencyDetails = useSelector((state) => state.currency);
  useEffect(() => {
    console.log(currencyDetails.curCountryCode);
    dispatch(fetchCurrencyData(currencyDetails.curCountryCode));
  }, [dispatch, currencyDetails.curCountryCode]);

  const arr = Object.entries(
    currencyDetails.currenciesData[currencyDetails.curCountryCode],
  ).slice(3, 11);

  return (
    <section className="details">
      <h1 className="title">Currency conversion rates</h1>
      <ul className="currencyDetails">
        {arr.map((el) => (
          <li key={el[0]}>
            {el[0]}
            :
            {el[1]}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CurrencyDetails;
