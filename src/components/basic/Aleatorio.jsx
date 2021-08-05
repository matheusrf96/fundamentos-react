import React from 'react'


const Aleatorio = (props) => {
    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>O número aleatório é: <strong>{ randomNumber }</strong></h2>
        </div>
    )
}

export default Aleatorio
