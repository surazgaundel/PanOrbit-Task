import { useEffect, useState,createContext } from 'react'
import './index.css'
import RoutesPage from './RoutesPage';

const url='https://panorbit.in/api/users.json';

export const UserContext=createContext();


function App() {
  const [user,SetUser]=useState()

  useEffect(()=>{
    fetchUser();
  },[])

  const fetchUser=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    SetUser(data.users);
  }


  return (
      <>
      <UserContext.Provider value={{user}}>
          <RoutesPage/>
      </UserContext.Provider>
      </>
  )
}

export default App
