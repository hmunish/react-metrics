import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCountryCode } from '../../redux/currency/currencySlice';

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
        <p className="rightIcon">&rarr;</p>
        Name:
        {' '}
        {curName}
        <br />
        Code:
        {' '}
        {curCode}
      </NavLink>
    </li>
  );
}

CurrencyCard.defaultProps = {
  curName: '',
  curCode: '',
};

CurrencyCard.propTypes = {
  curName: PropTypes.string,
  curCode: PropTypes.string,
};

export default CurrencyCard;
