import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-items'>
            <div>LOG OUT</div>
            <div>RESERVATION</div>
            <div>PRIVATE PARTIES</div>
            <img className='pr-3' src={logo}  />
            <div>EVENTS</div>
            <div>CONTACT US</div>
            <div>ABOUT US</div>
        </div>

        <div>
            <hr className='header-line'></hr>
            <div className='circle'>
            </div>
        </div>
    </div>
  )
}

export default Header