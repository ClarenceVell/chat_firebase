import React from 'react'
import Cam from '../assets/img/cam.png';
import Add from '../assets/img/add.png';
import More from '../assets/img/more.png';
import Messages from './Messages';
import Input from './Input'

function Chat({ width }) {
  return (
    <div className='chat' style={ width < 490 ? {display: 'none'} : {}}>

      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />

    </div>
  )
}

export default Chat