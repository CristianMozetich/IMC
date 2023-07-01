import './App.css'
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
    </>
  )
}

export default App
