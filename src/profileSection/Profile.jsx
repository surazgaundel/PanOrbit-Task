import {useContext, useState} from 'react'
import {UserContext} from '../App'

export default function Profile() {
    const {user}=useContext(UserContext);
    const [values,setValues] =useState(0);
    
    if(user){
        const {id,name,username,email,profilepicture,address,phone,website,company}=user[values];
    }
  return (
    <div>
        {/* {
            user&& user.map(item=>{
                return ( */}
                    <div key={id} className='profile'>
                        <div>
                            <img className='h-24 w-24 rounded-full object-cover'src={profilepicture} alt={name}/>
                            <p>{name}</p>
                            <p>Username: <span>{username}</span></p>
                            <p>e-mail: <span>{email}</span></p>
                            <p>Phone: <span>{phone}</span></p>
                            <p>Website: <span>{website}</span></p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Name: <span>{company.name}</span></p>
                            <p>catchphrase: <span>{company.catchPhrase}</span></p>
                            <p>bs: <span>{company.bs}</span></p>
                        </div>
                        <div>
                            <p>Address</p>
                            <p>Street: <span>{address.street}</span></p>
                            <p>Suite: <span>{address.suite}</span></p>
                            <p>City: <span>{address.city}</span></p>
                            <p>ZipCode: <span>{address.zipcode}</span></p>
                            <p>Lat: <span>{address.geo.lat}</span></p>
                            <p>Lng: <span>{address.geo.lng}</span></p>
                        </div>
                    </div>
                {/* )
            })
        } */}
    </div>
  )
}
