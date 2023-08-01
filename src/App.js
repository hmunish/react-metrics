import { Route, Routes } from 'react-router-dom';
import CurrencyList from './components/currencies/currencyList';
import CurrencyDetails from './components/currencies/currencyDetails';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<CurrencyList />} />
        <Route path="/details" element={<CurrencyDetails />} />
      </Routes>
    </main>
  );
}

export default App;
