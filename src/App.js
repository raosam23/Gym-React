import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Membership from './components/Membership';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logging from "./components/Logging";
import Signing from "./components/Signing";

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home isLogged = {isLogged} isAdmin = {isAdmin}/>} />
          <Route path="/membership" element={<Membership isLogged = {isLogged} isAdmin = {isAdmin} />} />
          <Route path='/log' element={<Login />} />
          <Route exact path="/login" element={<Logging />} />
          <Route exact path="/signup" element={<Signing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
