import React, { useRef, useState } from "react";
import "./App.css";
function ChatForm({ isThinking,chatHistory,messagesHistory ,generateBotResponse}) {
  const messageref = useRef();
//  const [isThinking ,SetIsThinking]=useState(false)

  const insubmitHandeler = (e) => {
    e.preventDefault();
    
    const UserMessage = messageref.current.value;
    if (!UserMessage) return;
    messageref.current.value = "";
    
    //update chat history os the user messages
   
    messagesHistory((history) => [
      ...history,
      { role: "user", text: UserMessage },
    ]);
   setTimeout(() => {
    messagesHistory((history) => [
        ...history,
        { role: "model", text: "thinking..." },
      ]);
      //call the function to generate the bots response
      generateBotResponse([...chatHistory,{ role: "user", text:` using the details provided above,please address this query with brief and formate answers in perfect formate that readable ${UserMessage}` }] )
     
   
    }, 600);
   
   
  };

  return (
    <form action="#" className="chat-form" onSubmit={insubmitHandeler}>
      <input
        ref={messageref}
        type="text"
        placeholder="message......"
        required
      />

      <button disabled={isThinking} class="material-symbols-rounded buttonstyle">arrow_upward</button>
    </form>
  );
}

export default ChatForm;
