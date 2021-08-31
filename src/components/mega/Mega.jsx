import React from 'react'

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

    return (
        <div>
            { generateNumbersList(6) }
        </div>
    )
}

export default Mega
