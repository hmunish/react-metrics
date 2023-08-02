import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const currencySlice = useSelector((state) => state.currency);
  function handleSearchClick() {
    const searchBar = document.querySelector('#search-bar');
    searchBar.classList.toggle('hidden');
    searchBar.focus();
  }
  return (
    <nav data-testid="nav-test">
      <li id="menu" />
      <NavLink to="/">
        <li id="back" />
      </NavLink>
      <p>{currencySlice.curCountryCode || 'All country currencies'}</p>
      <ul>
        <li id="mic" />
        <li
          id={currencySlice.curCountryCode ? 'settings' : 'search'}
          onClick={
            currencySlice.curCountryCode ? () => {} : () => handleSearchClick()
          }
          role="presentation"
        />
      </ul>
    </nav>
  );
}

export default Navbar;
