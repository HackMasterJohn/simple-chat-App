import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import { PullGroupConversation }  from '../server/server.js'
import { useSelector } from 'react-redux';

function GetMessageView (messageList)
{
  console.log(messageList);
    return messageList.map(
        (messageObj, i) =>
            <Message key={i} username={messageObj.user_name} message={messageObj.message} />
        );
}

export default function ConversationContainer() {
  PullGroupConversation();

  return (
    <Box sx={{}}>
      { useSelector((state) => GetMessageView(state.group.messages)) }
      <MessageSendForm />
    </Box>
  );
}