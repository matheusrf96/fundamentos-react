import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"
import Aleatorio from './components/basic/Aleatorio'

import Card from './components/layout/Card'

import './App.css'


const App = () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card title="01 - Primeiro componente" color="crimson">
                    <Primeiro />
                </Card>

                <Card title="02 - Fragmento" color="#007">
                    <Fragmento />
                </Card>

                <Card title="03 - Componente com parâmetros" color="#FA6900">
                    <ComParametro titulo="Segundo componente" subtitulo="subtítulo teste" />
                </Card>

                <Card title="04 - Exemplo de Card" color="#555">
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                    <Aleatorio min={1} max={60} />
                </Card>'
            </div>
        </div>
    )
}

export default App
