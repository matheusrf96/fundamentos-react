import React from 'react'

const StepForm = (props) => {
    return (
        <div>
            <label htmlFor="">Passo: </label>
            <input
                type="number"
                id="stepInput"
                name="stepInput"
                value={ props.step }
                onChange={(e) => props.setStep(+e.target.value) } />
        </div>
    )
}

export default StepForm
