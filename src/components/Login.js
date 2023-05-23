import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Login(props) {
    const [credentials, setcredentials] = useState({email:"", password:""});

    // useNavigate() hook is used for the navigation from the current page to the directed page
    let navigate = useNavigate();
    
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);  
          
          // redirecting to the main page if correct credentials are provided
          if(json.success)
          {
            //redirect
            localStorage.setItem('token', json.authToken); // storing authtoken of the user in the localStorage
            props.showalert("Logged in Successfully!", "success");
            navigate('/') // directing to the home page if login credentials are valid
          }
          else
          {
            // alert("Enter valid Credentials"); // showing alert if wrong credentials are provided
            props.showalert("Invalid Credentials!", "danger");
          }
    }
    
    const onChange = (e) => {
        setcredentials({...credentials, [e.target.name]: e.target.value}) // this will set the value in the email as you enter an email in the input tags
    }

    return (
        <div className='mt-2'>
            <h2 className='text-center'>Login to continue to AKsBook</h2>
            <form className='container col-md-3 my-5' onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className='my-3'>Don't have any account - <span>
                <Link aria-current="page" to="/signup">
                  Sign Up
                </Link>
              </span></p>
            </form>
        </div>
    )
}

export default Login
