import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Sidebar({ width }) {
  return (
    <div className='sidebar' style={ width < 490 ? {display: 'block'} : {}}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar