import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const buttonStyle = {
    marginRight: '10px',
    backgroundColor: 'white',
    color: '#3f51b5',
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '8px',
    color: '#ffffff',
  };

  const headingStyle = {
    marginBottom: '20px',
  };

  const pageStyle = {
    backgroundColor: '#3f51b5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Welcome to our website!</h2>
        <p>Please select an option:</p>
        <Link to="/signup">
          <button className="btn btn-primary" style={buttonStyle}>
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary" style={buttonStyle}>
            Log In
          </button>
        </Link>
        <br /><br />
        <Link to="/">
          <button className="btn btn-primary" style={buttonStyle}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
