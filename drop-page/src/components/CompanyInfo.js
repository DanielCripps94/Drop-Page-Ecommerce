import React, { Component } from 'react'

export default class CompanyInfo extends Component {

    render() {
        return (
                <div className='info--container'> 
                    <div className='banner--container'>
                        <h1>Deriving innovative solutions and support for your team</h1>
                    </div>
                    <div className='homepageimage--container'><img src="/images/homepage.png" alt=""/> </div>
                </div>
        )
    }
}