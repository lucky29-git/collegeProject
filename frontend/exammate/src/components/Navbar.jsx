import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="container navcontainer" style={{ position: 'relative', top: '-22vh' }}>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <span>Logo</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 customLink">PYQs</a></li>
        <li><a href="#" className="nav-link px-2 customLink">Resources</a></li>
        <li><a href="#" className="nav-link px-2 customLink">Notes</a></li>
        <li><a href="#" className="nav-link px-2 customLink">Prep Tools</a></li>
        <li><a href="#" className="nav-link px-2 customLink">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  )
}
