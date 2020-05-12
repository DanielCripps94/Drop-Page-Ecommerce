import React, { Component } from 'react' 


export default class Button extends Component {
    render () {
        return (
            <div className='button--container'>
                <p>To find out what we have to offer - Please select if you are a...</p>
                <button type="submit">Team</button>
                <button type="submit">Org</button> 
            </div>    
        )
    }
}

