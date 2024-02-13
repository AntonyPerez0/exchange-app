import React from 'react'
import './NavBar.css' // Import your CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="site-name">Cash Clown</div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/public" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://antonyperez0.github.io/personalPortfolio/"
            className="nav-link"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/AntonyPerez0" className="nav-link">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
