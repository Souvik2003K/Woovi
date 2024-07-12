import Home from './Pages/Home'
import PayoutForm from './Pages/PayoutForm'
import PayoutQR from './Pages/QRcode'

import logo from './Images/Logo.png'
import foot from './Images/Group 6.png'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Box from '@mui/material/Box'
import { useState } from 'react'

export default function App() {

  const [data, setData] = useState({});

  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
        <img src={logo} alt='logo' />
      </Box>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payout/form' element={<PayoutForm />} />
          <Route path='/payout/qr' element={<PayoutQR />} />
        </Routes>
      </Router>

      <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
        <img src={foot} alt='foot' />
      </Box>
    </div>
  )
}
