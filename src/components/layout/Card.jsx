import React from 'react'

import './Card.css'


const Card = (props) => {
    const cardStyle = {
        backgroundColor: props.color || '#555',
        borderColor: props.color || '#555'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{ props.title }</div>
            <div className="content">
                { props.children }
            </div>
        </div>
    )
}

export default Card
