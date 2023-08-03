import './App.css';
import { Route, Routes } from 'react-router-dom';
import CurrencyList from './components/currencies/currencyList';
import CurrencyDetails from './components/currencies/currencyDetails';
import Navbar from './components/navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CurrencyList />} />
        <Route path="/details" element={<CurrencyDetails />} />
      </Routes>
    </main>
  );
}

export default App;
