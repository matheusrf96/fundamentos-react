import React from 'react'

const DiretaFilho = (props) => {
    return (
        <div>
            <span>#{ props.number }: </span>
            <span><strong>{ props.text }</strong> </span>
            <span>{ props.bool ? 'Verdadeiro' : 'Falso' }!</span>
        </div>
    )
}

export default DiretaFilho