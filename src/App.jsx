import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"
import Aleatorio from './components/basic/Aleatorio'


const App = () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Primeiro />
            <ComParametro titulo="Segundo componente" subtitulo="subtítulo teste" />
            <Fragmento />
            <Aleatorio min={0} max={10} />
        </div>
    )
}

export default App
