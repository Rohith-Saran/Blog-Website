import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

    
      const handleSubmit =  (e) => {
        e.preventDefault(); // Prevents page reload on form submit, simple always use preventDefault in form submit handlers
    
        axios.post('http://localhost:3001/login', {email, password}, { withCredentials: true }) // withCredentials: true is used to include cookies in the request, which is necessary for authentication purposes when the server sets a cookie upon successful login.
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 
    
      };

    
  return (

     <div >

      <form className='form' style={{width:'400px'}} onSubmit={handleSubmit}>
      <div className='Signup'>
        <h2>Login</h2> <br/><br/><br/><br/>
        
          <div className='email'>
            <label htmlFor="email">Email:</label> 
            <input type="email" className='input' name="email" placeholder='Enter Email' required 
            onChange={(e) => setEmail(e.target.value)} /> 
          </div>
          <br/>
          <div className='password'>
            <label htmlFor="password">Password:</label> 
            <input type="password" className='input' name="password" placeholder="Enter Password" required ariahidden
             onChange={(e) => setPassword(e.target.value)}/>
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