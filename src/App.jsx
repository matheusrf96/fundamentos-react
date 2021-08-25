import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"
import Aleatorio from './components/basic/Aleatorio'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAlunos from './components/repetition/ListaAlunos'
import TabelaProdutos from './components/repetition/TabelaProdutos'
import ParOuImpar from './components/conditional/ParOuImpar'
import UserInfo from './components/conditional/UserInfo'
import DiretaPai from './components/communication/DiretaPai'
import IndiretaPai from './components/communication/IndiretaPai'
import Input from './components/forms/Input'

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
                </Card>

                <Card title="05 - Componente com filhos" color="#00C8F8">
                    <Familia surname="Rodrigues">
                        <FamiliaMembro name="Teste" />
                        <FamiliaMembro name="Teste 2" />
                        <FamiliaMembro name="Teste 3" />
                    </Familia>
                </Card>

                <Card title="06 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card title="07 - Desafio Repetição" color="#7FDBFF">
                    <TabelaProdutos />
                </Card>

                <Card title="08 - Renderização condicional" color="#982395">
                    <ParOuImpar number={5} />
                    <UserInfo user={{ name: 'Matheus', age: 24, }} />
                    <UserInfo user={{ email: 'teste@teste.com', }} />
                    <UserInfo user={{}} />
                </Card>

                <Card title="09 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card title="10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card title="11 - Componente Controlado (Input)" color="#E45F56">
                    <Input />
                </Card>
            </div>
        </div>
    )
}

export default App
