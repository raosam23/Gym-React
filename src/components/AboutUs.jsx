import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  const containerStyle = {
    padding: '20px',
    borderRadius: '8px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#3f51b5',
    marginBottom: '10px',
  };

  const textStyle = {
    lineHeight: '1.5',
    marginTop: '10px',
    fontSize: '18px', // Adjust the font size as needed
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <br /><br /><br />
        <h3>Welcome to DynamicFit!</h3>
        <p style={textStyle}>
          At DynamicFit, we believe in empowering individuals to achieve their fitness goals and lead a healthy lifestyle. Our web app is designed to provide you with a comprehensive fitness experience, combining convenience, personalized guidance, and a supportive community.
        </p>
        <h3>Our History</h3>
        <br /><br />
        <p style={textStyle}>
          DynamicFit was established in 1967 with a passion for revolutionizing the fitness industry. Since then, we have been dedicated to helping our members transform their lives through exercise and wellness.
        </p>
        <br /><br />
        <h3>Our Team</h3>
        <p style={textStyle}>
          Our team of experienced fitness professionals is committed to your success. From certified trainers to nutrition experts, we have assembled a talented group of individuals who are passionate about helping you reach your full potential.
        </p>
        <br /><br />
        <h3>Our Philosophy</h3>
        <p style={textStyle}>
          At DynamicFit, we believe that fitness is not a one-size-fits-all approach. We embrace the uniqueness of each individual and provide tailored programs to meet your specific needs and goals. We focus on sustainable lifestyle changes, incorporating exercise, nutrition, and mindset to create a well-rounded approach to fitness.
        </p>
        <br /><br />
        <h3>Our Vision</h3>
        <p style={textStyle}>
          Our vision is to inspire and empower individuals to live healthier and more active lives. We strive to be the go-to fitness resource, providing innovative tools and resources to help you stay motivated and committed to your fitness journey.
        </p>
        <br /><br />
        <h3>Getting Started with DynamicFit</h3>
        <p style={textStyle}>
          Join us today and experience the power of DynamicFit! Whether you're looking to lose weight, build muscle, increase flexibility, or simply improve your overall well-being, our web app is here to support you on your fitness journey.
        </p>
        <br /><br />
        <h3>Contact Us</h3>
        <p style={textStyle}>
          For any inquiries or questions, please reach out to our team at dynamicfit@ymail.com or +91 405 CALL. Follow us on Bleeter to stay updated with the latest news, fitness tips, and success stories from our community.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
