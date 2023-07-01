import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Display.css'

const Display = () => {
    const { bloodGroup, city } = useParams();
    const [Details, setDetails] = useState();
    useEffect(() => {
        axios.get('http://localhost:4000/showDetails', {
            headers: {
                bloodGroup,
                city,
            }
        })
            .then(data => { setDetails(data.data); console.log(data.data); })
            .catch(err => console.log(err))
    }, [bloodGroup, city])
    return (
        <div className='Display'>
            <div className='search-details'>
                <p className='blood-group'>{bloodGroup}</p>
                <p className='blood-group'>{city}</p>
            </div>
            <div className='show-data'>
                {Details && Details.map((item) => {
                    return (
                        <div className='card'>
                            <div className='card-name'>{item.name}</div>
                            <div className='card-group'>{item.bloodGroup}</div>
                            <div className='card-city'>{item.city}</div>
                            <div className='card-no'>{item.mobileNo}</div>
                            <a className='card-call' href={`tel:${item.mobileNo}`}>Call</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Display