import {useContext} from 'react'
import {UserContext} from '../App.jsx'
import { Link } from 'react-router-dom';

export default function HomePage() {
    const {user}=useContext(UserContext);
  return (
      <div className="relative">
      <div className='container'></div>
      <div className='text-2xl flex items-center justify-center flex-col min-h-3/4 min-w-2/5 bg-slate-50 absolute inset-x-1/3 inset-y-24 rounded-xl snap-x snap-mandatory'>
      <h1 className='bg-slate-100 w-full font-semibold text-slate-600 text-center rounded-t-lg py-7'>Select an account</h1>
      <div className='snap-start overflow-y-scroll scrollContainer w-full mx-2 px-3 py-4'>
        {user&&user.map(item=>{
          return (<Link key={item.id} to={`/user`}>
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
