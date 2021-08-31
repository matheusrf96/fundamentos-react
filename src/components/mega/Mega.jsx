import React, { useState } from 'react'

import './Mega.css'

const Mega = (props) => {
    const generateNumbers = (min, max, list) => {
        const randomNumber = parseInt(Math.random() * ((max + 1) - min)) + min
        return list.includes(randomNumber)
            ? generateNumbers(min, max, list)
            : randomNumber
    }

    const generateNumbersList = (quantity) => {
        const list = Array(quantity)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNumbers(1, 60, nums)
                return [ ...nums, newNumber ]
            }, [])
            .sort((x, y) => x - y)

        return list
    }

    const [quantity, setQuantity] = useState(props.quantity || 6)
    const initialNumbers = generateNumbersList(quantity)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="mega">
            <h2>Mega</h2>
            <h3>{ numbers.join(' ') }</h3>
            <div>
                <label htmlFor="quantity">Qtd de números: </label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={ quantity }
                    onChange={ (e) => {
                        setQuantity(+e.target.value)
                        setNumbers(generateNumbersList(+e.target.value))
                    }}
                />
            </div>
            <button onClick={ () => setNumbers(generateNumbersList(quantity)) }>Gerar Números</button>
        </div>
    )
}

export default Mega
