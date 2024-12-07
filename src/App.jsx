import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './home/home'
import FloatingBall from './components/FloatingBall/floatingBall'

function App() {

  return (
    <BrowserRouter>
     <Home />
     <FloatingBall/>
    </BrowserRouter>
  )
}

export default App
