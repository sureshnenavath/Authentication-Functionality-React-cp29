// Write your JS code here
import {withRouter, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'

const LogoutButton = props => {
  const handleLogout = props => {
    const {history} = props
    Cookie.remove('token')
    return history.replace('/login')
  }
  return <button onClick={() => handleLogout(props)}>Logout</button>
}
export default withRouter(LogoutButton)
