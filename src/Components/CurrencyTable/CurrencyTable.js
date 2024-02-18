import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './CurrencyTable.css'

const CurrencyTable = ({
  baseCurrency,
  setBaseCurrency,
  selectedCurrency,
  setSelectedCurrency,
}) => {
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
        const formattedCurrencies = currencyRates.map((currency) => ({
          value: currency,
          label: `${currency} (${currencySymbols[currency]})`,
        }))
        setCurrencies(formattedCurrencies)
        setRates(data.rates)
      })
  }, [baseCurrency])

  const swapCurrencies = () => {
    setBaseCurrency(selectedCurrency)
    setSelectedCurrency(baseCurrency)
  }

  const convertedAmount = (amount * rates[selectedCurrency]).toFixed(2)

  return (
    <div className="container">
      <div className="input-output-container">
        <div className="input-container">
          <div className="currency-info">
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
            <Select
              key={baseCurrency}
              className="currency-select"
              value={currencies.find((option) => option.value === baseCurrency)}
              onChange={(option) => setBaseCurrency(option.value)}
              options={currencies}
            />
          </div>
        </div>
        <button onClick={swapCurrencies}>Swap Currencies</button>
        <div className="output-container">
          <div className="currency-info">
            <h2 className="converted-currency">
              Selected Currency: {selectedCurrency}
            </h2>
            <h2>Converted Amount: {convertedAmount}</h2>
            <Select
              key={selectedCurrency}
              className="currency-select selected-currency-select"
              value={currencies.find(
                (option) => option.value === selectedCurrency,
              )}
              onChange={(option) => setSelectedCurrency(option.value)}
              options={currencies}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyTable
