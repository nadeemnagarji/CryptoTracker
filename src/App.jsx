import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Common/Footer/index.jsx'
import Header from './components/Common/Header/index.jsx'
import MainComponent from './components/LandingPage/index.jsx'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import DashBoardPage from './pages/DashBoardPage.jsx'
import ComparePage from './pages/ComparePage.jsx'
import CoinPage from './pages/CoinPage.jsx'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'



function App() {

const theme = createTheme({
  palette:{
    primary:{
      main:"#3a80e9"
    }
  }
})
  

  return (
    <ThemeProvider theme={theme}>
    <div className='App'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path='/coin/:id' element={<CoinPage/>} />
        <Route path='/compare' element={<ComparePage/>} />
        <Route path='/watchlist' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  )
}

export default App
