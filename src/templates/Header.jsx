import React from 'react'
import Home from './Home'
import Login from './Login'
import StudentList from './StudentList'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
      
      <Link className='btn btn-dark fs-5 me-2' to={'/home'} >Home</Link>
      <Link className='btn btn-dark fs-5 me-2' to={'/login'}>Login</Link>
      <Link className='btn btn-dark fs-5 me-2' to={'/studentlist'}>StudentList</Link>
      
    </div>
    </div>
  )
}

export default Header
