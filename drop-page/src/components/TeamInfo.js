import React, { Component } from 'react'

export default class TeamInfo extends Component {
    render() {
        return ( 
            <div className='team--container'>
                <div className='gap'>   - </div>
                <div className='team--title--container'>
                <h1>What we can offer to teams</h1>
                </div>
                <div className='team--image--container'>
                <img src="/images/team1.png" alt=""/>
                <img src="/images/team2.png" alt=""/>
                <img src="/images/team3.png" alt=""/> 
                </div>
            </div>
        )
    }
}

