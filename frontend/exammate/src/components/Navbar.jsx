import React from 'react';
// import '../App.css'
// import '../index.css'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container navcontainer relative">
      <header className="flex flex-wrap items-center justify-between py-3 mb-4 border-b">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="inline-flex items-center link-body-emphasis text-decoration-none">
            <span>Logo</span>
          </a>
        </div>

        <ul className="nav flex flex-wrap col-12 col-md-auto mb-2 justify-center md:justify-center">
          <li><Link to='/pyqs' className="nav-link px-2 customLink">PYQs</Link></li>
          <li><Link to='/resources' className="nav-link px-2 customLink">Resources</Link></li>
          <li><Link to='/notes' className="nav-link px-2 customLink">Notes</Link></li>
          <li><Link to='/about' className="nav-link px-2 customLink">About</Link></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary border-0 me-2"><Link to='/signin' className='customButton'> Login </Link></button>
          <button type="button" className="btn btn-primary"><Link to='/signup' className='customButton'>Sign-up</Link></button>
        </div>
      </header>
    </div>
  );
}
