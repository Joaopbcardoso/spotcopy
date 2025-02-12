import React from 'react'
import logoSpotfy from "../assets/logo/flowbeat-logo.png"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={logoSpotfy} alt="Logo do Spotfy" />
      </Link>
      <Link to="/">
        <h1>FlowBeat</h1>
      </Link>
    </div>
  )
}

