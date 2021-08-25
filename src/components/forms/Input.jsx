import React, { useState } from 'react'

import './Input.css'

const Input = (props) => {
    const [value, setValue] = useState('Initial')

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="input-card">
            <h2>{ value }</h2>
            <div className="input-box">
                <input value={ value } onChange={ inputChange } className="input" />
                <input value={ value } readOnly className="input" />
                <input value={ undefined } className="input" />
            </div>
        </div>
    )
}

export default Input