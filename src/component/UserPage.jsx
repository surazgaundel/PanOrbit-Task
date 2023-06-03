import React from 'react'
import NavPage from './NavPage'
// import Profile from './profileSection/Profile'
import { Outlet } from 'react-router-dom'
import Signout from './Signout'
import Chat from './Chat'

export default function UserPage() {
  return (
    <div className="user-container">
      <div className="header mt-5">
        <div className="text-slate-400 text-3xl font-semibold">Profile</div>
        <div><Signout/></div>
        <hr className=''/>
      </div>
      <div>
        <NavPage/>
      </div>
      <Outlet/>
    </div>
  )
}
