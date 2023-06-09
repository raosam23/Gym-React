import React from 'react';

export default function GymAddress() {
  const addressStyle = {
    backgroundColor: '#1a237e',
    color: '#fff',
    padding: '50px',
    marginTop: '0',
    marginBottom: '0',
    fontSize: '1.5rem',
  };

  return (
    <div className="text-center mt-0" style={addressStyle}>
      <h3 style={{ marginBottom: '1rem' }}>Gym Address</h3>
      <p style={{ marginBottom: '1rem' }}>No. 123, "DynamicFit", Shakti Kendra <br /> Koramangala <br /> Bengaluru - 560034</p>
    </div>
  );
}
