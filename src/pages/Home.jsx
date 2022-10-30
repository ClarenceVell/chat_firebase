import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home({ width }) {
  console.log(width)
  return (
    <div className='home'>

      <div className="container">
        <Sidebar width={width} />
        <Chat width={width} />
      </div>

    </div>
  )
}

export default Home