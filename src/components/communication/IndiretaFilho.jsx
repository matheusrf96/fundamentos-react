import React from 'react'


const IndiretaFilho = (props) => {
    return (
        <div>
            <div>Filho</div>

            <button onClick={() => props.sendInfoProperty('Matheus', 24, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}

export default IndiretaFilho