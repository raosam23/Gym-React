import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar'

function Navbar(props) {
  const { isLogged, isAdmin } = props;
  const LoggedIn = {
      marginLeft : "100px"
  };

  return (
    <>
    {isAdmin==true ? <AdminNavbar isLogged = {isLogged} /> : <UserNavbar isLogged = {isLogged}/>}
    </>
  );
}

export default Navbar;
