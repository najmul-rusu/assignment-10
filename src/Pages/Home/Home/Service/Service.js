import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, prices, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-content'>
                <h2>{name}</h2>
                <p>{prices}</p>
                <p><small>{description}</small></p>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default Service;