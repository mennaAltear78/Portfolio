import { useState, useRef, useEffect } from "react";
import "./App.css";
import ChatBot_Icon from "./ChatBot_Icon";
import ChatForm from "./ChatForm";
import ChatMeassage from "./ChatMeassage";
import { companyInfo } from "./comanyInfo";
import NavBar from "./NavBar";
import About from "../Pages/About";
import Home from "../Pages/Home";

function MainChatBot({ children }) {
  const [chatHistory, setChatHistory] = useState([{
    // hideInchat property is used to prevent the data from being displayed in the chat
    //so chat will not contain the companyinfo
    hideInChat: true,
    role: "model",
    text: companyInfo
  }]);
  const [isThinking, SetIsThinking] = useState(false)
  const [chatbotToggler, SetChatbotToggler] = useState(false)
  const controlToggling = () => {
    SetChatbotToggler(prev => !prev)
  }
  useEffect(() => {
    console.log(chatbotToggler);

  }, [chatbotToggler])
  const generateBotResponse = async (history) => {
    //helper function to update chat history
    const upateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "thinking..."),
        { role: "model", text },
      ]);
    };
    console.log("history", history); //have all chats
    console.log("chat", chatHistory); //have all chats expcet the last one
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    SetIsThinking(true)
    try {

      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );

      if (!response.ok) {
        const errorText = await response.text(); // احصل على محتوى الخطأ
        throw new Error(errorText || "Something went wrong");
      }

      const data = await response.json();
      //clean and update chat history with bots response
      const apiResponseText = data.candidates[0].content.parts[0].text;
      console.log(apiResponseText);
      upateHistory(apiResponseText);
      SetIsThinking(false)
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const chatRef = useRef(null);

  if (chatHistory) {
    console.log(chatHistory);
  }

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" })
    }
  }, [chatHistory]);

  return (
    <div>
      <NavBar />
      {children}
     

    </div>

  );
}

export default MainChatBot;
