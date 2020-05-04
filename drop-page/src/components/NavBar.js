import React, { Component }from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {

    render( ) {
        return (
            <div className='header--Container'>
                <div className='link--Container'>
                    <div className='header--box1'>
                        <h1>Daniel Cripps</h1>
                    </div>
                    <div className='header--box2'>
                        <h1> Pricing</h1>
                    </div>
                    <div className='header--box3'>
                        <h1> Solutions</h1>
                    </div>  
                    <div className='header--box4'>
                        <h1> Sign In</h1>
                    </div>  
                </div>
            </div>
        )
    }

}

export default NavBar