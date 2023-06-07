import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-primary-dark py-3">
      <div className="container">
        <a className="navbar-brand fs-3" href="#">
          DynamicFit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Membership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
