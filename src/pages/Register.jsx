import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A");
  const [city, setCity] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const bloods = ['A+','A-','B+','B-','AB+','AB-','O+','O-','A1+','A1-'];

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      }
    )
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
      .then(res => res.json())
      .then(data => setCity(data.city))
  }

  const submit = () => {
    axios.post('http://localhost:4000/register',
      {
        name,
        bloodGroup,
        city,
        mobileNo
      }
    )
      .then((data) => { console.log(data) })
      .catch((err) => { console.log(err) })
  }

  return (
    <div className='home-form'>
      <div className='left'>
        <div className='cityOut'>
          <input className='city' type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
          <select className='select-box1' onChange={(e) => { setBloodGroup(e.target.value) }}>
            {
              bloods.map((item) => {
                return (<option value={item}>{item}</option>)
              })
            }
          </select>
        </div>
        <div className='cityOut'>
          <input className='city' type="text" placeholder='city' onChange={(e) => { setCity(e.target.value) }} value={city} />
          <button className='getl' onClick={getLoc}>Get Location</button>
        </div>
        <div className='cityOut'>
          <input className='select-box' type="text" placeholder='phone no' onChange={(e) => { setMobileNo(e.target.value) }} />
        </div>
      </div>
      <div className="right">
        <button className='search' onClick={submit}>Register</button>
      </div>
    </div>
  )
}

export default Register