import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"


const App = () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Primeiro />
            <ComParametro
                titulo="Segundo componente"
                subtitulo="subtítulo teste"
            />
            <Fragmento />
        </div>
    )
}

export default App
