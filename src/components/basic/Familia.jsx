import React from 'react'

const Familia = (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, (child, i) => {
                    return React.cloneElement(child, { ...props, key: i })
                })
            }
        </div>
    )
}

export default Familia
