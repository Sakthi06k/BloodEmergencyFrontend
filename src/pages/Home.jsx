import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [bloodGroup, setBloodGroup] = useState("A");
  const [city, setCity] = useState("");
  const bloods = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'A1+', 'A1-'];

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      }
    )
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
      .then(res => res.json())
      .then(data => { console.log(data); setCity(data.city) })
  }

  const navigate = useNavigate();
  const search = () => {
    navigate(`/Display/${bloodGroup}/${city}`, { replace: true });
  }

  return (
    <>
      <div className='home-form'>
        <div className="left">
          <select className='select-box' onChange={(e) => { setBloodGroup(e.target.value) }}>
            {
              bloods.map((item) => {
                return (<option value={item}>{item}</option>)
              })
            }
          </select>
          <div className='cityOut'>
            <input className='city' type="text" placeholder='city' onChange={(e) => { setCity(e.target.value) }} value={city} />
            <button className='getl' onClick={getLoc}>Get Location</button>
          </div>
        </div>
        <div className="right">
          <button className='search' onClick={search}>Search</button>
        </div>
      </div>
    </>
  )
}

export default Home