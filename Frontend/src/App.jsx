import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>


    </>
  )
}

export default App
