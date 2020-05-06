import React, { Component }from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {

    render( ) {
        return (
            <header className='header--container'>
                <nav className='link--container'>
                    <div></div>
                    <div className='logo--container'><h1>Daniel Cripps</h1></div>
                    <div className='divider' />
                    <div className='navbar--items'>
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