import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card" style={{'width': '18rem'}}>
            {
                props.children
            }
        </div>
    )
}

export default Card;
