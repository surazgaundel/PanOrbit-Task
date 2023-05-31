import { useEffect, useState,createContext } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './index.css'
import HomePage from './component/HomePage';

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
          <HomePage/>
      </UserContext.Provider>
      </>
  )
}

export default App
