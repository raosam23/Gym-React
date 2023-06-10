import React from 'react';
import MemberCard from './Membercard';
import Navbar from './Navbar';


function Membership(props) {
  const {isLogged, isAdmin} = props
  return (
    <>
  <Navbar isLogged = {isLogged} isAdmin = {isAdmin} />

      <MemberCard
        title="Basic Membership"
        description="Achieve Your Fitness Goals, One Step at a Time!"
        price="₹2,250/month"
        color="#FF6384" // Pink
      />
      <MemberCard
        title="Premium Membership"
        description="Unlock the Ultimate Fitness Experience!"
        price="₹3,750/month"
        color="#36A2EB" // Blue
      />
      <MemberCard
        title="Student Membership"
        description="Stay Active, Stay Focused, Stay Ahead!"
        price="₹1,500/month"
        color="#FFCE56" // Yellow
      />
      <MemberCard
        title="Family Membership"
        description="Fit and Fun for the Whole Family!"
        price="₹6,750/month"
        color="#4BC0C0" // Turquoise
      />
      <MemberCard
        title="Senior Membership (60+)"
        description="Embrace a Healthier Lifestyle, at Any Age!"
        price="₹1,875/month"
        color="#9966FF" // Purple
      />
      <MemberCard
        title="Couples Membership"
        description="Work Out Together, Stay Strong Together!"
        price="₹5,250/month"
        color="#FF9F40" // Orange
      />
      <MemberCard
        title="One-Year Prepaid Membership"
        description="Commit to Fitness and Save Big!"
        price="₹30,000/year"
        color="#32CD32" // Lime Green
      />
      <MemberCard
        title="Day Pass"
        description="Get a Taste of Fitness, Anytime You Want!"
        price="₹750/day"
        color="#FFD700" // Gold
      />
      <MemberCard
        title="Corporate Membership (10+ employees)"
        description="Boost Your Team's Health and Productivity!"
        price="₹15,000/month"
        color="#8B4513" // Brown
      />
      <MemberCard
        title="Group Classes Membership"
        description="Energize Your Workouts with a Community Spirit!"
        price="₹2,625/month"
        color="#FF00FF" // Magenta
      />
    </>
  );
}

export default Membership;
