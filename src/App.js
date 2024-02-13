import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CurrencyTable from './Components/CurrencyTable/CurrencyTable';
import Footer from './Components/Footer/Footer';
import LineChart from './Components/CurrencyConverter/CurrencyConverter';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="table">
        <CurrencyTable
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        <LineChart
          baseCurrency={baseCurrency}
          selectedCurrency={selectedCurrency}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
