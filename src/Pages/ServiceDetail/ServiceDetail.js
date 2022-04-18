import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container m-5'>
            <h2>Service Detail Page: {serviceId}</h2>
            
        </div>
    );
};

export default ServiceDetail;