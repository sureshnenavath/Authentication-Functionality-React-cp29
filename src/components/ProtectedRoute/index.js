import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'
const ProtectedRoute = props => {
  const getToken = Cookies.get('token')
  if (getToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
