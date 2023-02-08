import React from 'react'
import LOGO from './images/ricebowl.png'

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={LOGO} className="nav-logo" alt="ricebowl" />
                <div className='name'>
                    <h1 className='fn'>Katelyn</h1>
                    <h1 className='ln'>Copage</h1>
                </div>
               
                <ul className="nav-items">
                    <li>About</li>
                    <li>Code Projects</li>
                    <li>Graphic Design</li>
                    <li>Contact</li>
                </ul>

         
            </nav>
        </header>
    )
  }

  export default Header;