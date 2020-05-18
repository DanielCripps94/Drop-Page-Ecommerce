import React from 'react'
import select from 'react-select'

const options = [
    {value: 'Team', label: 'Team'},
    {value: 'Organisation', label: 'Organisation'}
]

export default class selectBox extends component {

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
            <Select 
            value={ SelectedOption }
            onChange={this.handleOnChange}
            options={options}
            />
        )
    }
}