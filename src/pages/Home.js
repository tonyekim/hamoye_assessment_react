import React from 'react'
import { Auth } from './auth'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a routerLink="/" class="navbar-brand" >Welcome</a>
      
      <div >
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
         
          <li class="nav-item">
            <NavLink to='/dashboard' class="nav-link active" >Navigate to dashboard!</NavLink>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
      <div className='LoginPage'>
        <h1>Register & Login to Check Flight Information</h1>
      </div>
      <Auth />
    </div>
  )
}

export default Home