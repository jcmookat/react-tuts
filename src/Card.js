import React from 'react'

export const Card = ({ title, name, age, gender }) => {
    
    return (
        <div>
            <div>{title} Card</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
        </div>
    )
}

export default Card