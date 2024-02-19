import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Common/Footer/index.jsx'
import Header from './components/Common/Header/index.jsx'
import MainComponent from './components/LandingPage/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
   <MainComponent />
    <Footer />
    </>
  )
}

export default App
