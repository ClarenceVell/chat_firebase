import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img 
          src="https://images.pexels.com/photos/13432980/pexels-photo-13432980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="" 
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img 
          src="https://images.pexels.com/photos/13432980/pexels-photo-13432980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="" 
        />
      </div>
    </div>
  )
}

export default Message