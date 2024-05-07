import React from 'react';
import '../App.css'
import '../index.css'
export default function Navbar() {
  return (
    <div className="container navcontainer relative top-[-28vh] ">
      <header className="flex flex-wrap items-center justify-between py-3 mb-4 border-b">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="inline-flex items-center link-body-emphasis text-decoration-none">
            <span>Logo</span>
          </a>
        </div>

        <ul className="nav flex flex-wrap col-12 col-md-auto mb-2 justify-center md:justify-center">
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
  );
}
