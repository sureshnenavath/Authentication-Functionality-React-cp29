import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const handleLogin = async props => {
  const {history} = props
  const url = 'https://apis.ccbp.in/login'
  const userDetails = {
    username: 'rahul',
    password: 'rahul@2021',
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(userDetails),
  }
  const response = await fetch(url, options)
  const data = await response.json()
  if (response.ok) {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    history.replace('/')
  }
}

const Login = props => {
  const getToken = Cookies.get('jwt_token')

  if (getToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={() => handleLogin(props)}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
