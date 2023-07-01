import './App.css'
import Footer from './components/Footer/Footer'
import IMCCalculator from './components/ImcCalculator/ImcCalculator'
import Intro from './components/Intro/Intro'
import IntroTable from './components/IntroTable/IntroTable'

function App() {


  return (
    <>
      <h1>Índice de masa corporal</h1>
      <Intro/>
      <IMCCalculator/>
      <IntroTable/>
      <Footer/>
    </>
  )
}

export default App
