import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { login } from '../../requests/auth'

import '../../assets/styles/login.css'

function Login() {
  //In this example, Login is a component that displays a login form and handles the login process.
  const [username, setUsername] = useState('') //The component uses the useState hook to manage the state of the username, password, and redirectToReferrer variables.
  const [password, setPassword] = useState('')
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  //When the user submits the form, the handleSubmit function sends the username and password to the server for authentication using the login function from a separate auth.js file.
  const handleSubmit = async (event) => {
    event.preventDefault()
    const success = await login(username, password)
    if (success) {
      setRedirectToReferrer(true) //If the login is successful, the redirectToReferrer variable is set to true,*(1)
    } else {
      //If the login is unsuccessful, an error message is displayed to the user.
      alert('Invalid username or password')
    }
  }

  //*(1),which causes the Redirect component to redirect the user to the home page.
  if (redirectToReferrer) {
    return <Navigate to="/" />
  }

  return (
    <div className="login-page">
      <h1 className="login-heading">Login</h1>
      <form className="login-box" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login

/* 


*/
