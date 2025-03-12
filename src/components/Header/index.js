// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
const Header = () => {
  return (
    <div>
      <ul className="header">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}
export default Header
