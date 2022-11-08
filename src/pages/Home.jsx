import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home({ width }) {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className='home'>

      <div className="container">
        <Sidebar width={width} isSelected={isSelected} setIsSelected={setIsSelected} />
        <Chat width={width} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>

    </div>
  )
}

export default Home