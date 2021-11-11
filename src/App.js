import { useState, useEffect } from "react";
import { MessageList } from "./Components/MessageList";
import { InputText } from "./Components/InputText";
import styles from './Components/styles.module.css';

export default function App() {

  const [messageList, setMessageList] = useState([]);

  function handleMsgChange({ author, text }) {
    if (!author) author = 'anonim';
    setMessageList((messageList) => [...messageList, { author, text }]);
  }

  useEffect(() => {
    const lastMessage = messageList[messageList.lenght - 1];

    if (lastMessage?.author && lastMessage?.author !== 'Bot') {
      setTimeout(() => {
        setMessageList((state) => [...state, { text: `Hy ${lastMessage.author}`, author: 'Bot' }
        ])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className={styles.app}>
      <MessageList styles={styles} messageList={messageList} />
      <InputText styles={styles} onMessageChange={handleMsgChange} />
    </div>
  );
};



