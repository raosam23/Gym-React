import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Membership from './components/Membership';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home isLogged = {isLogged} isAdmin = {isAdmin}/>} />
          <Route path="/membership" element={<Membership isLogged = {isLogged} isAdmin = {isAdmin} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
