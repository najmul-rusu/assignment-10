import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../Images/top-banner-01.png';
import banner2 from '../../../Images/top-banner-02.png';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Chitwan</h3>
                    <p>The Ultimate Nepal Jungle Experience</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The Last Resort</h3>
                    <p>Be brave and bungee</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Banner;