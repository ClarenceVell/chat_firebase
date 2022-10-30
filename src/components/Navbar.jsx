import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

function Navbar() {
  return (
    <div className='navbar'>

      <span className="logo">Vells Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14096606/pexels-photo-14096606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>

    </div>
  )
}

export default Navbar