import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className = "navbar">

        <div className='Header'><h1>Blog App</h1></div>
        <div className='Links'>
            <a href='Home'>Home</a>
            <a href='Create'>Create</a>
            <a href='Contact'>Connect</a>
        </div>
        <div className='Login'><h4><Link to="/register" className='register'>Register/Login</Link></h4></div>

    </div>
  )
}

export default Navbar