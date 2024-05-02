import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-2 lg:px-12 '>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}/>
            <InfoCard bgClass="bg-accent" cardTitle="Our Locations" img={marker}/>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone}/>
        </div>
    );
};

export default Info;