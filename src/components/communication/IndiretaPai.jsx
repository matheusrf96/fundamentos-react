import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = (props) => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [active, setActive] = useState(false)

    const sendInfo = (name, age, active) => {
        setName(name)
        setAge(age)
        setActive(active)
    }

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