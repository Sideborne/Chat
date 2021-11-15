import { useState, useEffect } from "react";
import { MessageList, InputText, ChatRooms } from "./Components";
import styles from './Components/styles.module.css';
import { Grid } from '@material-ui/core';

export default function App() {

  const [messageList, setMessageList] = useState([]);

  const handleMsgChange = ({ author, text }) => {
    if (!author) author = 'anonim';
    setMessageList((messageList) => [...messageList, { author, text }]);
  }

  useEffect(() => {
    const lastMessage = messageList[messageList.lenght - 1];

    if (lastMessage?.author && lastMessage?.author !== 'Bot') {
      setTimeout(() => {
        setMessageList((state) => [...state, { text: `Серьёзно? - ${lastMessage.author}`, author: 'Bot' }
        ])
      }, 1500)
    }
  }, [messageList])

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div className={styles.app}>
          <ChatRooms styles={styles} chats={ } />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={styles.app}>
          <MessageList styles={styles} messageList={messageList} />
          <InputText styles={styles} onMessageChange={handleMsgChange} />
        </div>
      </Grid>
    </Grid>
  );
}



