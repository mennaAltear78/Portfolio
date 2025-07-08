import React from 'react'
import './App.css'
import ChatBot_Icon from './ChatBot_Icon'
function ChatMeassage({chat}) {
  return (
   !chat.hideInChat&& (<div className={`message ${chat.role==='model'?'bot':'user'}-message`}>
        {chat.role==="model" && <ChatBot_Icon />}
    <p className="message-text">{chat.text}</p>
  </div>)
  )
}

export default ChatMeassage




