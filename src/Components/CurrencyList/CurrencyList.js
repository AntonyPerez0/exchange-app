import React, { useEffect } from 'react'
import './CurrencyList.css'

const CurrencyList = ({ baseCurrency, currencies, setBaseCurrency, rates }) => {
  useEffect(() => {
    setBaseCurrency(baseCurrency)
  }, [baseCurrency])

  return (
    <div className="currency-box">
      <h2>List of Currencies:</h2>
      <ul>
        {currencies.map((currency) => (
          <li key={currency} onClick={() => setBaseCurrency(currency)}>
            {currency}: {rates[currency]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurrencyList
