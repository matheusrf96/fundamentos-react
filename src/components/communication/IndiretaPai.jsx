import React from 'react'

import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = (props) => {
    const sendInfo = (name, age, active) => {
        console.log(name, age, active)
    }

    let name = '?'
    let age = 0
    let active = false

    return (
        <div>
            <div>
                <p>Nome: { name }</p>
                <p>Idade: { age }</p>
                <p>Ativo: { active ? 'Sim' : 'Desativado' }</p>
            </div>

            <IndiretaFilho sendInfoProperty={ sendInfo } />
        </div>
    )
}

export default IndiretaPai