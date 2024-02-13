import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import CurrencyTable from './Components/CurrencyTable/CurrencyTable'
import Footer from './Components/Footer/Footer'
import CurrencyConverter from './Components/Chart/HistoricalChart'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div className="table">
        <CurrencyTable />
        <Routes>
          <Route path="/currencyconverter" element={<CurrencyConverter />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
export default App
