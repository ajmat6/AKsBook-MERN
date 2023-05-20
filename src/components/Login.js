import React from 'react'

const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch('http://localhost:5000/api/auth/login', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const json = await response.json();
    //   console.log(json);   
}

function Login() {
    return (
        <div>
            <form className='container col-md-3 my-5' onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login