import React from 'react'
import logoSpotfy from "../assets/logo/flowbeat-logo.png"

export const Header = () => {
  return (
    <div className='header'>
        <img src= {logoSpotfy} alt="Logo do Spotfy" />
        <a href="/">
            <h1>FlowBeat</h1>
        </a>
    </div>
  )
}

