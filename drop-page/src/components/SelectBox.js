import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    {value: 'Team', label: 'Team'},
    {value: 'Organisation', label: 'Organisation'}
]

export default class SelectBox extends Component {

    state = {
        SelectedOption: null
    }

    handleOnChange = SelectedOption => {
        this.setState(
            {SelectedOption},
            () => console.log('Option Selected:', this.state.SelectedOption)
        )
    }

    render() {

        const { SelectedOption } = this.state
        return (
            <div className='select--box--container'>
            <Select 
            value={ SelectedOption }
            onChange={this.handleOnChange}
            options={options}
            />
            </div>
        )
    }
}