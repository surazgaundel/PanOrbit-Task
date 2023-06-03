import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../App'
import Map from '../component/Map';
import { useLocation } from 'react-router-dom';

export default function Profile() {
    const {user}=useContext(UserContext);
    // console.log('active',activeUser);
    const location = useLocation();
    console.log(location);
    
    return (
        <div className='profile-container'>
        {
            user&& user.map(item=>{
                const {id,name,username,email,profilepicture,address,phone,website,company}=item;
                return (
                    <div key={id} className='profile'>
                        <div className='image-profile'>
                            <img className='profileImage'src={profilepicture} alt={name}/>
                        </div>
                        <div className='user-profile'>
                            <p className='fullName'>{name}</p>
                            <p>Username: <span>{username}</span></p>
                            <p>e-mail: <span>{email}</span></p>
                            <p>Phone: <span>{phone}</span></p>
                            <p>Website: <span>{website}</span></p>
                            <hr/>
                        </div>
                        <div className='company-profile'>
                            <p>Company</p>
                            <p>Name: <span>{company.name}</span></p>
                            <p>catchphrase: <span>{company.catchPhrase}</span></p>
                            <p>bs: <span>{company.bs}</span></p>
                        </div>
                        <div className='address-profile'>
                            <p>Address</p>
                            <p>Street: <span>{address.street}</span></p>
                            <p>Suite: <span>{address.suite}</span></p>
                            <p>City: <span>{address.city}</span></p>
                            <p>ZipCode: <span>{address.zipcode}</span></p>
                        </div>
                        <div className='location-profile'>
                            <p>Lat: <span>{address.geo.lat}</span></p>
                            <p>Lng: <span>{address.geo.lng}</span></p>
                        </div>
                        <div className='vertical-line'></div>
                        <div className='map-profile'><Map/></div>
                    </div>
                  )
             })
         }  
    </div>
  )
}
