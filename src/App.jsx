//import { Form } from "./components/FormClass/Form"
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/Form/MessageList";
import { useState, useEffect } from "react";
import { AUTHOR } from '.constants';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  };
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          value: 'Im BOT',
        })
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messages]);
  return (
    <div>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};

