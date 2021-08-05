import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"
import Aleatorio from './components/basic/Aleatorio'

import Card from './components/layout/Card'


const App = () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Card title="01 - Primeiro componente">
                <Primeiro />
            </Card>

            <Card title="02 - Fragmento">
                <Fragmento />
            </Card>

            <Card title="03 - Componente com parâmetros">
                <ComParametro titulo="Segundo componente" subtitulo="subtítulo teste" />
            </Card>

            <Card title="04 - Exemplo de Card">
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
                <Aleatorio min={1} max={60} />
            </Card>
        </div>
    )
}

export default App
