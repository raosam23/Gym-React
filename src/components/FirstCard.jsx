import React from 'react';
import MyImage from '../assets/desktop-wallpaper-dumbbells-gym-weight-disks-dual-wide-background-fitness-weights.jpg';

export default function FirstCard() {
  const cardStyle = {
    position: 'relative',
    marginBottom: '-75px', // Adjust this value to match the paddingBottom in FeaturesSection component
  };

  const contentStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    padding: '0 30px', // Adjust the padding as needed
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      <img src={MyImage} className="img-fluid w-100" alt="Fitness" />

      <div style={contentStyle}>
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
