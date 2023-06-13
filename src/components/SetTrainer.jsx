import React, { useState } from 'react';
import Navbar from './AdminNavbar';

export default function SetTrainer() {
  const [trainerName, setTrainerName] = useState('');
  const [trainerAge, setTrainerAge] = useState('');
  const [trainerSex, setTrainerSex] = useState('');
  const [trainerExperience, setTrainerExperience] = useState('');
  const [trainerPrice, setTrainerPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the entered values using the state variables
    console.log('Trainer Name:', trainerName);
    console.log('Trainer Age:', trainerAge);
    console.log('Trainer Sex:', trainerSex);
    console.log('Trainer Experience:', trainerExperience);
    console.log('Trainer Price:', trainerPrice);
    // Reset form fields
    setTrainerName('');
    setTrainerAge('');
    setTrainerSex('');
    setTrainerExperience('');
    setTrainerPrice('');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Set Trainer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="trainerName">Trainer Name</label>
            <input
              type="text"
              className="form-control"
              id="trainerName"
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainerAge">Age</label>
            <input
              type="number"
              className="form-control"
              id="trainerAge"
              value={trainerAge}
              onChange={(e) => setTrainerAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainerSex">Sex</label>
            <select
              className="form-control"
              id="trainerSex"
              value={trainerSex}
              onChange={(e) => setTrainerSex(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="trainerExperience">Experience</label>
            <input
              type="number"
              className="form-control"
              id="trainerExperience"
              value={trainerExperience}
              onChange={(e) => setTrainerExperience(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="trainerPrice">Price</label>
            <input
              type="number"
              className="form-control"
              id="trainerPrice"
              value={trainerPrice}
              onChange={(e) => setTrainerPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
