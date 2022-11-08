import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Sidebar({ width, isSelected, setIsSelected }) {
  return (
    <div className='sidebar' style={ width < 490 && isSelected === false ? {display: 'block'} : width < 490 ? {display: 'none'} : {}}>
      <Navbar />
      <Search />
      <Chats setIsSelected={setIsSelected} />
    </div>
  )
}

export default Sidebar