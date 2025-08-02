import React from 'react';
import "./ServiceBox.css"

const ServiceBox = ({serviceName, serviceContent}) => {

  return (
    <div className='service_box'>
        <h1 className="service_name">{serviceName}</h1>
        <p className="service_content">{serviceContent}</p>
    </div>
  )
}

export default ServiceBox