import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function SignUp(props) {
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
            props.showalert("Successfully created your account!", "success");
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

  const validateConfirmPassword = () => {
    let pass = document.getElementById('password');
    let cpass = document.getElementById('cpassword');
    let submitButton = document.getElementById('submitButton');

    if(cpass.value != pass.value)
    {
      props.showalert("Passwords not Matching!", "danger");
      submitButton.disabled = true;
    }
    else
    {
      submitButton.disabled = false;
    }
  }

  return (
    <div className='mt-2'>
      <h2 className='text-center my-2'>Sign Up to continue to AKsBook</h2>
      <form className='container col-md-3 my-2' onSubmit={handleSignUpSubmit}>
                <div className="mb-2">
                    <label htmlFor="text" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' aria-describedby="emailHelp" value={credentials.username} onChange={onChange} required/>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} minLength={8} required onKeyUp={validateConfirmPassword}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange} minLength={8} required onKeyUp={validateConfirmPassword}/>
                </div>
                <button  type="submit" className="btn btn-secondary" id='submitButton'>Create Account</button>
                <p className='my-3'>Already have an acoount - <span>
                <Link aria-current="page" to="/login">
                  Login
                </Link>
              </span></p>
      </form>
    </div>
  )
}

export default SignUp
