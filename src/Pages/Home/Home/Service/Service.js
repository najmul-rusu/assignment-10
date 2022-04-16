import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, img, prices, description } = service;
    const navigate =useNavigate();
    const handlenavigateToServiceDetail =id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div id='services' className='service'>
            <img src={img} alt="" />
            <div className='service-content'>
                <h2>{name}</h2>
                <p>{prices}</p>
                <p><small>{description}</small></p>
                <button className='service-btn' onClick={()=>handlenavigateToServiceDetail(id)}>Book Now</button>
            </div>
        </div>
    );
};

export default Service;