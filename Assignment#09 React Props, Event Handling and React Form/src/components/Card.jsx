import React from 'react';
import '../style/Card.css';

function Card({ user }){
    return (
        <div className='card'>
            <p>{user.name}</p>
            <p>{user.job}</p>
            <p>{user.hobby}</p>
        </div>
    )
}

export default Card;