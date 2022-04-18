import React from 'react';
import aboutImg from '../../Images/nhRusu.png'

import './About.css'


const About = () => {
    return (
        <div className='container d-flex my-4  align-items-center'>
            <div className='w-50'>
                <img className='about-img' src={aboutImg} alt="" />
            </div>
            <div className='w-50 px-4'>
                <h2>About Me</h2>
                <p><b>Hey,</b> <br /> My name is <span className='text-warning'><b>Najmul Hasan</b></span>, I'm a Freelancer Web Designer and WordPress Developer.

My job is to build your website so that it is functional and user-friendly but at the same time attractive. Keeping in mind scalability and clean code that is maintainable and readable.

I've worked with companies of all shapes and sizes, so contact me if you'd like to work together on your next project. By night as a Freelance Web Designer and Word Press Developer, I spend my time working on freelance projects and building my own products.</p>
            </div>
        </div>
    );
};

export default About;