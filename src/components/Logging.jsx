import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Logging = () => {
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

  const [isUserLogin, setUserLogin] = useState(true);

  const handleSwitch = () => {
    setUserLogin(!isUserLogin);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Welcome to DynamicFit!</h2>
        <p>Please select an option:</p>
        <button className="btn btn-primary" style={buttonStyle} onClick={handleSwitch}>
          {isUserLogin ? 'Switch to Admin account' : 'Switch to User account'}
        </button>

        <br /><br />

        {isUserLogin ? (
          <form onSubmit={handleLogin}>
            <label htmlFor="userEmail">Email:</label>
            <br />
            <input type="email" id="userEmail" />
            <br />
            <label htmlFor="userPassword">Password:</label>
            <br />
            <input type="password" id="userPassword" />
            <br /><br />
            <button className="btn btn-primary" style={buttonStyle} type="submit">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="adminEmail">Email:</label>
            <br />
            <input type="email" id="adminEmail" />
            <br />
            <label htmlFor="adminPassword">Password:</label>
            <br />
            <input type="password" id="adminPassword" />
            <br /><br />
            <button className="btn btn-primary" style={buttonStyle} type="submit">
              Login
            </button>
          </form>
        )}
        <br />
        <Link to="/">
          <button className="btn btn-primary" style={buttonStyle}>
            Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Logging;
