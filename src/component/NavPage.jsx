import React from 'react'
import { Link } from 'react-router-dom'

export default function NavPage() {
  return (
    <nav className='navbar'>
        <li>
        <Link to='/user/profile'>Profile</Link>
        </li>
        <hr/>
        <li>
        <Link to='/user/posts'>Posts</Link>
        </li>
        <hr/>
        <li>
        <Link to='/user/gallery'>Gallery</Link>
        </li>
        <hr/>
        <li>
        <Link to='/user/todo'>ToDo</Link>
        </li>
    </nav>
  )
}
