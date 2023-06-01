import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate=useNavigate();
  return (
    <div>
        <div className="container"></div>
        <h1 className="text-5xl underline ml-64 font-serif font-bold text-white absolute inset-x-64 inset-y-36">404, Page Not Found</h1>
        <button className='absolute top-1/3 start-1/3 end-2/3 border-2 border-black w-1/3 h-16 rounded-md bg-gradient-to-r from-violet-500 to-blue-500 text-2xl font-semibold text-white hover:bg-gradient-to-l from-violet-600 to-blue-600'onClick={()=>navigate('/')}>Back Home Page</button>
    </div>
  )
}
