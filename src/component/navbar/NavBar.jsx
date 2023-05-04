import React from 'react'
import {Link} from "react-router-dom"
import "./NavBar.scss"
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

  const [ active, setActive ] = useState( false )
  const [ open, setOpen ] = useState( false )
  const {pathname}=useLocation()   
  

  const isActive = () => {
  window.scrollY > 0 ? setActive(true): setActive(false)
}


  useEffect( () => {
    window.addEventListener( "scroll", isActive );
    
      
      return () => {
        window.removeEventListener("scroll",isActive)
      }

   },[])
 


  const currentUser = {
    id: 1,
    userName: "Jane Doe",
    isSeller:true
  
}

  return (
    <div className={active || pathname !== "/" ? "navbar active": "navbar"}>
      <div className="container">
        <div className="logo">
        <Link to="/" className='Link'>
            <span className='text'>fiverr</span>
            </Link>
          <span className='dot'>.</span>
        </div>
        <div className="link">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
          {! currentUser ?.isSeller && <span>Become a Seller</span>}
          { !currentUser && <button className='btn'>Join</button> }
          { currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}> 
              <img src="../../../public/img/profie pic.jfif" alt="profile-picture" />
              <span>{ currentUser?.userName }</span>
            {open  && <div className='options'>
              { currentUser?.isSeller && (
                <>
                  <Link className='Link' to="/mygigs">Gigs</Link>
                  <Link className='Link' to="/add">Add New Gigs</Link>
                </>
              ) }
              <Link className='Link' to="/order">Order</Link>
              <Link className='Link' to="/messages">Messages</Link>
              <Link className='Link' to="/">Logout</Link>
            </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname!== "/") && 
        
        <>
        <hr className="line" />
      <div className="menu">
        <Link className='Link' to="/">Graphics & Design</Link>
        <Link className='Link' to="/">Video & Animation</Link>
        <Link className='Link' to="/">Writing & Translation</Link>
        <Link className='Link' to="/">AI Services</Link>
        <Link className='Link' to="/">Digital Marketing</Link>
        <Link className='Link' to="/">Music & Audio</Link>
        <Link className='Link' to="/">Programming & Tech</Link>
        <Link className='Link' to="/">Business</Link>
        <Link className='Link' to="/">LifeStyle</Link>

      </div>
      </>
      }
    </div>
  )
}

export default NavBar
