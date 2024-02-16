import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CurrencyTable from './Components/CurrencyTable/CurrencyTable'
import Footer from './Components/Footer/Footer'
import LineChart from './Components/CurrencyConverter/CurrencyConverter'
import CurrencyList from './Components/CurrencyList/CurrencyList'

function App() {
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const [currencies, setCurrencies] = useState([])
  const [rates, setRates] = useState({}) // Initialize rates state

  useEffect(() => {
    console.log('baseCurrency changed:', baseCurrency) // Add this line
    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const currencyRates = Object.keys(data.rates)
        setCurrencies(currencyRates)
        setRates(data.rates) // Update rates state with fetched data
      })
  }, [baseCurrency])

  useEffect(() => {
    setBaseCurrency(baseCurrency)
    setSelectedCurrency(selectedCurrency)
  }, [baseCurrency, selectedCurrency])

  return (
    <>
      <NavBar />
      <div className="content">
        <CurrencyTable
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        {currencies && (
          <CurrencyList
            baseCurrency={baseCurrency}
            setBaseCurrency={setBaseCurrency}
            currencies={currencies}
            rates={rates} // Pass rates state as prop
          />
        )}
        <LineChart
          baseCurrency={baseCurrency}
          selectedCurrency={selectedCurrency}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
