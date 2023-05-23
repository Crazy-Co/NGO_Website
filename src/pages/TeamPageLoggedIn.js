import React from 'react'
import { Team } from '../components/Team'
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from '../components/auth/NavbarLoggedIn';


const TeamPage = (props) => {
  return (
    <div>
      <NavBarLoggedIn />

      <Team />
    </div>
  )
}

export default TeamPage