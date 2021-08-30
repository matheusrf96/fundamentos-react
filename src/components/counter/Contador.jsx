import React, { Component } from 'react'

import './Contador.css'

class Contador extends Component {
    /* ==== Uma alternativa de criação de state nos componentes baseados em classe =====

    constructor(props) {
        super(props)

        this.state = {
            number: props.initialNumber,
        }
    }

    */

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 1,
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step,
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step,
        })
    }

    setStep = (e) => {
        this.setState({
            step: +e.target.value,
        })
    }

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <h3>Valor: { this.state.number }</h3>
                <div>
                    <label htmlFor="">Passo: </label>
                    <input type="number" name="stepInput" id="stepInput"
                        value={ this.state.step } onChange={ this.setStep } />
                </div>
                <button onClick={ this.inc }>+</button>
                <button onClick={ this.dec }>-</button>
            </div>
        )
    }
}

export default Contador
