import React from 'react'
import './NavBar.css' // Import your CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com" className="nav-link">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
