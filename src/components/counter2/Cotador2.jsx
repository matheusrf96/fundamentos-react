import React, { useState } from 'react'

import Display from './Display'
import StepForm from './StepForm'
import Buttons from './Buttons'

import '../counter/Contador.css'

const Contador2 = (props) => {
    const [number, setNumber] = useState(props.initialNumber || 0)
    const [step, setStep] = useState(props.initialStep || 1)

    const inc = () => {
        setNumber(number + step)
    }

    const dec = () => {
        setNumber(number - step)
    }

    const setStepValue = (newStep) => {
        setStep(newStep)
    }

    return (
        <div className="contador">
            <h2>Contador</h2>

            <Display number={ number } />
            <StepForm step={ step } setStep={ setStepValue } />
            <Buttons onInc={ inc } onDec={ dec } />
        </div>
    )
}

export default Contador2