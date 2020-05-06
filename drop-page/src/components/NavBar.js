import React, { Component }from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {

    render( ) {
        return (
            <header className='header--Container'>
                <nav className='link--Container'>
                    <div className='header--box1'><h1>Daniel Cripps</h1></div>
                    <div className='navbar_items'>
                        <ul>
                            <li> Pricing</li>
                            <li> Services</li>
                            <li> Sign in</li>
                        </ul>
                    </div> 
                </nav>
            </header>
        )
    }

}

export default NavBar