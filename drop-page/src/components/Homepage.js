import React, { Component } from 'react'
import NavBar from './NavBar'
import CompanyInfo from './CompanyInfo'
class Homepage extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                 <CompanyInfo/>
            </div>            
        )
    }
}

export default Homepage