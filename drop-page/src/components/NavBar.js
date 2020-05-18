import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import  SelectBox from './SelectBox'

class NavBar extends Component {

    render( ) {
        return (
            <header className='header--container'>
                <nav className='link--container'>
                    <div></div>
                    <div className='logo--container'><img src="/images/logo2.png" alt=""/> </div>
                    <div className='divider' />
                    <div className='navbar--items'>
                        <ul>
                            <li> Pricing</li>
                            <li> Services</li>
                            <li> Sign in</li>
                            <SelectBox />
                        </ul>
                    </div> 
                </nav>
            </header>
        )
    }

}

export default NavBar