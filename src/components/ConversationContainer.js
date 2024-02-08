import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import LoginForm from './LoginForm';
import { useState } from "react";
import { UpdateMessages } from '../server/server.js';



function GetMessageView (messageList)
{
    return messageList.map(
        (messageObj, i) =>
            <Message key={i} username={messageObj.user_name} message={messageObj.message} />
        );
}

export default function ConversationContainer() {
  const [messageList, updateMessageList] = useState([]);
  UpdateMessages(updateMessageList);
  const messageComponents = GetMessageView(messageList);

    return (
      <Box sx={{}}>
        <LoginForm/>
      </Box>
    );
  }

  //        {messageComponents}
  // <MessageSendForm />