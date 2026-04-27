import React, { useContext } from 'react'        
import { Link } from 'react-router-dom'
import { UserContext } from './App'               
import axios from 'axios'
function Navbar() {
  const user = useContext(UserContext);
  const handleLogout = () => {
    axios.get('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        if (response.data === "Logout Successfull") {
          window.location.href = '/'; // Redirect to the home page after successful logout
        }
      })
      .catch(error => {
        console.error('Error logging out:', error); // Handle any errors that occur during logout
      });
  }   
  return (
    <div className = "navbar">

        <div className='Header'><h1>Blog App</h1></div>
        <div className='Links'>
            <a href='/'>Home</a>
            <Link to="/create" className='create'>Create</Link>
            <a href=''>Connect</a>
        </div>

        {
          user.username ? (
            <input type='button' onClick={handleLogout} value='Logout' className='logout' />
          ) : (
            <div className='Login'><h4><Link to="/register" className='register'>Register/Login</Link></h4></div>
          )
        }

    </div>
  )
}

export default Navbar