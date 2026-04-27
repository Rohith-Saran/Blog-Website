import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3001/', { withCredentials: true })
      .then(user => 
        setUser(user.data)
      )
      .catch(err => console.log(err))
  }, [])  




  return (
    <>
    <UserContext.Provider value={user}>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </Router>

    </UserContext.Provider>

    </>
  )
}

export default App
