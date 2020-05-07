import React, { Component } from 'react'

export default class CompanyInfo extends Component {

    render() {
        return (
                <div className='info--container'> 
                    <div className='banner--container'>
                        <h1>Deriving innovative solutions and support for your team.</h1>
                        <p className='depth--container'>NE are at the forefront of bridging the gap between new Esports teams with the correct organisation in order for them to gain the and have access to the correct individuals and opportunities within the market.</p>
                    </div>
                    <div className='homepageimage--container'><img src="/images/homepage.png" alt=""/> </div>
                </div>
        )
    }
}