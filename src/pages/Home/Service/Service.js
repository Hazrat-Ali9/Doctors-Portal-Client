import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={service.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
           
        </div>
      </div>
    );
};

export default Service;