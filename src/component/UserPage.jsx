import React from 'react'
import NavPage from './NavPage'
// import Profile from './profileSection/Profile'
import { Outlet } from 'react-router-dom'
import Signout from './Signout'
import Chat from './Chat'

export default function UserPage() {
  return (
    <div className="usercontainer">
      <div>
        <NavPage/>
      </div>
      <div>
        <Signout/>
      </div>
      <div>
        <Chat/>
      </div>
      <Outlet/>
    </div>
  )
}
