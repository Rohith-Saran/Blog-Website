import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (

     <div >

      <form className='form' style={{width:'400px'}}>
      <div className='Signup'>
        <h2>Login</h2> <br/><br/><br/><br/>
        
          <div className='email'>
            <label htmlFor="email">Email:</label> 
            <input type="email" className='input' name="email" placeholder='Enter Email' required /> 
          </div>
          <br/>
          <div className='password'>
            <label htmlFor="password">Password:</label> 
            <input type="password" className='input' name="password" placeholder="Enter Password" required ariahidden/>
          </div>
          <br/>
          <button type="submit" className='btn' style={{background:'#472ca7'}}>Login</button>

        <br/><br/><br/>
        <div className='bottom'>
           <p>Not Yet Registered ? </p>
           <Link to="/register" className='Link'> <button type='button' className='btn'>Register</button> </Link>
        </div>

      </div>
    </form>

    </div>

  )
}

export default Login