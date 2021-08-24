import React from 'react'

import DiretaFilho from './DiretaFilho'

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho text="Filho 1" number={ 5 } bool={ true } />
        </div>
    )
}

export default DiretaPai