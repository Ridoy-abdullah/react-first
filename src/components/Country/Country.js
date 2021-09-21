import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, flag, population } = props.country
    return (
        <div className='country'>
            <h3>{name}</h3>
            <h4>{capital}</h4>
            <img src={flag} alt="" />
            <h4>{population}</h4>
        </div>
    );
};

export default Country;