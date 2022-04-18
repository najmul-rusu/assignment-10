import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Benefit from './Benefit/Benefit';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;
    const navigate =useNavigate();
    const handlenavigateToServiceDetail =id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className=''>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <h4 className='text-center'>{name}</h4>
                        <div className=''>
                            <h1 className='text-center'>${price}<span className='fs-6 text-muted'>/mo</span></h1>

                        </div>
                        {
                            description.map(benefit =>
                                <Benefit benefit={benefit}>
                                </Benefit>)
                        }
                    </Card.Body>
                    <div className='mx-auto'>
                        <Button className="text-white">Become A Member</Button>
                    </div>
                </Card>
            </CardGroup>
        </div>
        // <div id='services' className='service'>
        //     <img src={img} alt="" />
        //     <div className='service-content'>
        //         <h2>{name}</h2>
        //         <p> {price} </p>
        //         <p><small>{description}</small></p>
        //         <button className='service-btn' onClick={()=>handlenavigateToServiceDetail(id)}>Book Now</button>
        //     </div>
        // </div>
    );
};

export default Service;