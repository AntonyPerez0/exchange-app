import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CurrencyTable from './Components/CurrencyTable/CurrencyTable'
import Footer from './Components/Footer/Footer'
import HistoricalChart from './Components/Chart/HistoricalChart' // Import the HistoricalChart component

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="table">
        <CurrencyTable />
        {/*<HistoricalChart baseCurrency="USD" targetCurrency="JPY" />{' '}*/}
        {/*/!* Use the HistoricalChart component *!/*/}
      </div>
      <Footer />
    </>
  )
}

export default App
