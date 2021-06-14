import React from 'react';
import './card.css'

const Card = ({data}) => {
    return (
        <div className="card-container">
            <span><b>Name : </b>{data.name}</span>
            <span className="description"><b>Description : </b></span>
            <span className="description-content">{data.description ? data.description : 'No Description'}</span>
            <span className="comics"><b>List of Comics : </b>{data.comics.available}</span>
        </div>
    )
}

export default Card;