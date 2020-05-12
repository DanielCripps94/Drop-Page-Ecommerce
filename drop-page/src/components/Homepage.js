import React, { Component } from 'react'
import NavBar from './NavBar'
import CompanyInfo from './CompanyInfo'
import TeamInfo from './TeamInfo'

class Homepage extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <CompanyInfo/> 
                <TeamInfo/>
            </div>            
        )
    }
}

export default Homepage