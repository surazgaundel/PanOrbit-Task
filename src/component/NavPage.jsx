import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavPage() {

  return (
    <nav className='navbar'>
        <li >
        <NavLink to='/user/profile'>Profile</NavLink>
        </li>
        <hr/>
        <li >
        <NavLink to='/user/posts'>Posts</NavLink>
        </li>
        <hr/>
        <li >
        <NavLink to='/user/gallery'>Gallery</NavLink>
        </li>
        <hr/>
        <li >
        <NavLink to='/user/todo'>ToDo</NavLink>
        </li>
    </nav>
  )
}
