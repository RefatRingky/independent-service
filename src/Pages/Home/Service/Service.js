import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
       navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt='' height="400px" width="350"></img>
            <h4>Name:{name}</h4>
            <p>Price:${price}</p>
            <button className='btn btn-danger' onClick={() =>navigateToServiceDetail(id)}>Order Now:{name}</button>
        </div>
    );
};

export default Service;