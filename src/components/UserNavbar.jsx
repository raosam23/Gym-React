import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { isLogged } = props;
  const LoggedIn = {
      marginLeft : "100px"
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-primary-dark py-3">
      <div className="container">
        <Link className="navbar-brand fs-3" to="/">
          DynamicFit
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/membership">
                Membership
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Personal Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                About Us
              </Link>
            </li>
            {!isLogged && (
              <li className="nav-item" style={LoggedIn}>
                <Link className="nav-link" to="/log">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
