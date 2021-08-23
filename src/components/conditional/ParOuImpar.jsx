import React from 'react'

const ParOuImpar = (props) => {
    return (
        <div>
            { props.number % 2 === 0
                ? <span>Par</span>
                : <span>Ímpar</span>
            }
        </div>
    )
}

export default ParOuImpar
