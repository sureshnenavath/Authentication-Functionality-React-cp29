// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
const handleLogin = props => {
  const {history} = props
  Cookies.set('token', 'this-is-the-sample-token', {expires: 2})
  history.replace('/')
}
const Login = props => {
  const getToken = Cookies.get('token')
  if (getToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={() => handleLogin(props)}>
        Login With simple Creds
      </button>
    </div>
  )
}
export default Login
