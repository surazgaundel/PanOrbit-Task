import {createContext,useContext, useState} from 'react'
import {UserContext} from '../App.jsx'
import { Link, useNavigate } from 'react-router-dom';


export const ActiveUserContext=createContext();

export default function HomePage() {
    const {user}=useContext(UserContext);
    // const[activeUser,setActiveUser]=useState();
    const navigate=useNavigate();

    const handleActiveUser=(id)=>{
      const activeItem=user.filter(item=>item.id===id);
      // setActiveUser(activeItem);
      navigate('/user/profile',{
        state:{activeItem}
      })

    }



  return (
      <div className="relative">
      <div className='container'></div>
      <div className='text-2xl flex items-center justify-center flex-col min-h-3/4 min-w-2/5 bg-slate-50 absolute inset-x-1/3 inset-y-24 rounded-xl snap-x snap-mandatory'>
      <h1 className='bg-slate-100 w-full font-semibold text-slate-600 text-center rounded-t-lg py-7'>Select an account</h1>
      <div className='snap-start overflow-y-scroll scrollContainer w-full mx-2 px-3 py-4'>
        {user&&user.map(item=>{
          return (<Link key={item.id} onClick={()=>handleActiveUser(item.id)}to={`/user/profile`}>
          <img className='h-10 w-10 rounded-full mx-3 my-2 inline'src={item.profilepicture} alt={item.name}/>
          <h1 className='inline px-3 font-sans text-slate-600' >{item.name}</h1>
          <hr className='text-black w-8/10'/>
          </Link>)
        })}
    </div>
    </div>
  </div>
    
  )
}
