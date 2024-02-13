import './App.css'
import NavBar from './Components/NavBar/NavBar'
import CurrencyTable from './Components/CurrencyTable/CurrencyTable'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="table">
        <CurrencyTable />
      </div>
      <Footer />
    </>
  )
}

export default App
