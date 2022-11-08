import React, { useContext } from 'react'
import Cam from '../assets/img/cam.png';
import Add from '../assets/img/add.png';
import More from '../assets/img/more.png';
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
import { BiArrowBack } from 'react-icons/bi';

function Chat({ width, isSelected, setIsSelected }) {

  const { data } = useContext(ChatContext);

  const handleClick = () => {
    setIsSelected(false)
  }

  return (
    <div className='chat' style={ width < 490 && isSelected === false ? {display: 'none'} : width < 490? {display: 'block'} : {}}>

      <div className="chatInfo">
        <div className='chatName'>
          {width < 490 && (
            <BiArrowBack onClick={handleClick} />
          )}
          <span>{data.user?.displayName}</span>
        </div>
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