// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="outerHeader">
    <div className="outerHeaderChild1">
      <div className="logoContainer">
        <img
          alt="wave"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
      </div>
      <h1>Wave</h1>
    </div>
    <div className="outerHeaderChild2">
      <div className="linkElements">
        <Link to="/">Home</Link>
      </div>
      <div className="linkElements">
        <Link to="/about">About</Link>
      </div>
      <div className="linkElements">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
