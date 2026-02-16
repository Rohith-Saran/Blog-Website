import React from 'react'

function Navbar() {
  return (
    <div className = "navbar">

        <div className='Header'><h1>Blog App</h1></div>
        <div className='Links'>
            <a href='Home'>Home</a>
            <a href='About'>Create</a>
            <a href='Contact'>Connect</a>
        </div>
        <div className='Login'><h4>Register/Login</h4></div>

    </div>
  )
}

export default Navbar