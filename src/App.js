import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Membership from './components/Membership';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logging from "./components/Logging";
import Signing from "./components/Signing";
import AboutUs from './components/AboutUs';
import SetTrainer from './components/SetTrainer';
import AddProducts from './components/AddProducts';

function App() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home isLogged = {isLogged} isAdmin = {isAdmin}/>} />
          <Route exact path="/membership" element={<Membership isLogged = {isLogged} isAdmin = {isAdmin} />} />
          <Route exact path='/aboutUs' element={<AboutUs />}/>
          <Route exact path="/addTrainer" element={<SetTrainer />} />
          <Route exact path='/addProducts' element={<AddProducts />}/>
          <Route exact path='/log' element={<Login />} />
          <Route exact path="/login" element={<Logging />} />
          <Route exact path="/signup" element={<Signing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
