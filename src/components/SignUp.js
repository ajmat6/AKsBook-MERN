import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const [credentials, setcredentials] = useState({username:"", email:"", password:"", cpassword:""});
  let navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/api/auth/createuser', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username: credentials.username, email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);  

          // redirecting to the main page if correct credentials are provided
          if(json.success)
          {
            //redirect
            localStorage.setItem('token', json.authToken); // storing authtoken of the user in the localStorage
            navigate('/') // directing to the home page if login credentials are valid

          }
          else
          {
            alert("Enter valid Credentials"); // showing alert if wrong credentials are provided
          }
  }
  
  const onChange = (e) => {
    setcredentials({...credentials, [e.target.name]: e.target.value}) // this will set the value in the email as you enter an email in the input tags
  }

  return (
    <div>
      <form className='container col-md-3 my-5' onSubmit={handleSignUpSubmit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' aria-describedby="emailHelp" value={credentials.username} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} minLength={8} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange} minLength={8} required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default SignUp
