import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div >

      <form className='form'>
      <div className='Signup'>
        <h2>Sign Up</h2> <br/><br/>
        
          <div className='username'>
            <label htmlFor="username">Username:</label> 
            <input type="text" className='input' name="username" placeholder='Enter Username' required /> 
          </div>
          <br/>
          <div className='email'>
            <label htmlFor="email">Email:</label> 
            <input type="email" className='input' name="email" placeholder='Enter Email' required /> 
          </div>
          <br/>
          <div className='password'>
            <label htmlFor="password">Password:</label> 
            <input type="password" className='input' name="password" placeholder="Enter Password" required  aria-hidden/>
          </div>
          <br/>
          <button type="submit" className='btn' style={{background:'#472ca7'}}>Register</button>

        <br/><br/>
        <div className='bottom'>
           <p>Already have an account? </p>
           <Link to="/login" className='Link'> <button type='button' className='btn'>Login</button> </Link>
        </div>

      </div>
    </form>

    </div>
    
  )
}

export default Register