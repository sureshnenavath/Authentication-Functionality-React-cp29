// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
const handleLogin = props => {
  const {history} = props
  Cookies.set(
    'jwt_token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwiaWF0IjoxNjE5MDk0MjQxfQ.1i6BbQkQvtvpv72lHPNbl2JOZIB03uRcPbchYYCkL9o',
    {expires: 2},
  )
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
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
