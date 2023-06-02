import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../App'
import { useLocation, useNavigate } from 'react-router-dom';
import Signout from '../component/Signout';
import Chat from '../component/Chat';

export default function Profile() {
    // const {user}=useContext(UserContext);
    const navigate=useNavigate();
    const location = useLocation()
    const data=location.state;
    // const [activeUser,setActiveUser]=useState(data);
    // console.log(data)
    const {id,name,username,email,profilepicture,address,phone,website,company}=data;
    
    return (
        <div className='profile-container'>
        {/* {
            user&& user.map(item=>{
                return ( */}
                    <div key={id} className='profile'>
                        <div className='profile-1'>
                            <p>Profile</p>
                            <img className='profileImage'src={profilepicture} alt={name}/>
                            <p className='fullName'>{name}</p>
                            <p>Username: <span>{username}</span></p>
                            <p>e-mail: <span>{email}</span></p>
                            <p>Phone: <span>{phone}</span></p>
                            <p>Website: <span>{website}</span></p>
                            <hr/>
                        </div>
                        <div className='profile-2'>
                            <p>Company</p>
                            <p>Name: <span>{company.name}</span></p>
                            <p>catchphrase: <span>{company.catchPhrase}</span></p>
                            <p>bs: <span>{company.bs}</span></p>
                            <hr/>
                        </div>
                        <div className='profile-3'>
                            <p>Address</p>
                            <p>Street: <span>{address.street}</span></p>
                            <p>Suite: <span>{address.suite}</span></p>
                            <p>City: <span>{address.city}</span></p>
                            <p>ZipCode: <span>{address.zipcode}</span></p>
                        </div>
                        <div className='profile-4'>
                            <p>Lat: <span>{address.geo.lat}</span></p>
                            <p>Lng: <span>{address.geo.lng}</span></p>
                        </div>
                    </div>
                  {/* )
             })
         }  */}
    </div>
  )
}
