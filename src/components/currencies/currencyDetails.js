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
}

export default CurrencyDetails;
