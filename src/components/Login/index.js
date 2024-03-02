// Write your JS code here
// import Cookies from 'js-cookie'

import axios from 'axios'
import './index.css'

const LoginForm = () => {
  console.log('Login Form')

  const loginButtonClicked = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const response = await axios.post('https://apis.ccbp.in/login', userDetails)
    console.log(response)
  }
  return (
    <>
      <h1>Please Login</h1>
      <button type="button" onClick={loginButtonClicked}>
        Login with Sample Creds
      </button>
    </>
  )
}

export default LoginForm
