import React from 'react';

export default function MemberCard(props) {
  const { title, description, price, color } = props;

  const optionStyle = {
    border: 'none',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    paddingTop: '100px',
    paddingBottom: '100px',
    marginTop: '0',
    marginBottom: '0',
    backgroundColor: color,
    color: '#fff', // Set text color to white
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: color,
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: '20px',
  };

  return (
    <div style={optionStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
      <p style={priceStyle}>{price}</p>
      <a href="#" style={buttonStyle}>
        Book
      </a>
    </div>
  );
}
