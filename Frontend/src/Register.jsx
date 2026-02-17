import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/register', {
      username,
      email,
      password
    })
    .then((response) => {
      navigate("/login");
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 

  };

  return (
    <div >

      <form className='form' onSubmit={handleSubmit}>
      <div className='Signup'>
        <h2>Sign Up</h2> <br/><br/>
        
          <div className='username'>
            <label htmlFor="username">Username:</label> 
            <input type="text" className='input'  placeholder='Enter Username' required
            onChange={ (e) => setUsername(e.target.value)} /> 
          </div>
          <br/>
          <div className='email'>
            <label htmlFor="email">Email:</label> 
            <input type="email" className='input' placeholder='Enter Email' required 
            onChange={ (e) => setEmail(e.target.value)} /> 
          </div>
          <br/>
          <div className='password'>
            <label htmlFor="password">Password:</label> 
            <input type="password" className='input' placeholder="Enter Password" required  aria-hidden
            onChange={ (e) => setPassword(e.target.value)} />
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