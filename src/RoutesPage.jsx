import { Routes, Route } from 'react-router-dom'
import HomePage from './component/HomePage'
import UserPage from './component/UserPage'
import NotFound from './component/NotFound'
import Profile from './profileSection/Profile'
import Posts from './profileSection/Posts'
import Gallery from './profileSection/Gallery'
import ToDo from './profileSection/ToDo'

export default function RoutesPage() {
  return (
    <>
    <Routes>
        <Route path='/'exact element={<HomePage/>}/>
        <Route path='user' element={<UserPage/>}>
          <Route index element={<Profile/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='posts'  element={<Posts/>}/>
          <Route path='gallery'  element={<Gallery/>}/>
          <Route path='todo'  element={<ToDo/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}
