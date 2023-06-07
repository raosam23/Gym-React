import React from 'react';
import MyImage from '../assets/desktop-wallpaper-dumbbells-gym-weight-disks-dual-wide-background-fitness-weights.jpg';

export default function FirstCard() {
  return (
    <div className="position-relative">
      <img src={MyImage} className="img-fluid w-100" alt="Fitness" />

      <div className="position-absolute bottom-0 end-0 pe-4 pb-4 text-end" style={{ padding: '0 30%' }}>
        <h2 className="text-white" style={{ fontSize: '5rem', marginBottom: '2rem' }}>
          Step up your fitness with us
        </h2>
        <p className="text-white" style={{ fontSize: '2.5rem' }}>
          Build your body and fitness with a professional touch
        </p>
      </div>
    </div>
  );
}
