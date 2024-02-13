import React, { useState, useEffect } from 'react'
import './CurrencyTable.css'

const CurrencyTable = ({ baseCurrency, setBaseCurrency, selectedCurrency, setSelectedCurrency }) => {
  const [currencies, setCurrencies] = useState([])
  const [rates, setRates] = useState({})
  const [amount, setAmount] = useState(1)

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'Fr.',
    CNY: '¥',
    SEK: 'kr',
    NZD: 'NZ$',
    BGN: 'лв',
    BRL: 'R$',
    CZK: 'Kč',
    DKK: 'kr',
    HKD: 'HK$',
    HRK: 'kn',
    HUF: 'Ft',
    IDR: 'Rp',
    ILS: '₪',
    INR: '₹',
    ISK: 'kr',
    KRW: '₩',
    MXN: '$',
    MYR: 'RM',
    NOK: 'kr',
    PHP: '₱',
    PLN: 'zł',
    RON: 'lei',
    RUB: '₽',
    SGD: 'S$',
    THB: '฿',
    TRY: '₺',
    ZAR: 'R',
  }

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const currencyRates = Object.keys(data.rates)
        setCurrencies(currencyRates)
        setRates(data.rates)
      })
  }, [baseCurrency])

  const swapCurrencies = () => {
    setBaseCurrency(selectedCurrency)
    setSelectedCurrency(baseCurrency)
  }

  return (
    <div>
      <h2>Current Currency: {baseCurrency}</h2>
      <h2>
        Amount: {currencySymbols[baseCurrency]}
        {amount}
      </h2>
      <input
        className="input-number"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="currency-select"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={swapCurrencies}>Swap Currencies</button>

      <select
        className="currency-select"
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Exchange Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedCurrency}</td>
            <td>{rates[selectedCurrency] * amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CurrencyTable
