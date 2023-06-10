import React from 'react'
import FirstCard from './FirstCard'
import Features from './Features'
import GymAddress from './GymAddress'
import Navbar from './Navbar'

export default function (props) {
  const {isLogged, isAdmin} = props
  return (
    <div>
      <Navbar isLogged = {isLogged} isAdmin = {isAdmin}/>
        <FirstCard />
        <Features />
        <GymAddress />
    </div>
  )
}
