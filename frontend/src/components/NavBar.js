// File: frontend/src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Management System</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faculties">Faculties</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upload">BULK UPLOAD</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
