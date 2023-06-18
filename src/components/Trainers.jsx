import React from 'react';
import CardGrid from './TrainGrid';
import Navbar from './Navbar';

export default function Trainers() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 mb-4">Select Personal Trainers</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <CardGrid />
          </div>
        </div>
      </div>
    </>
  );
}
