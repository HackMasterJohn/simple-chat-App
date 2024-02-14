import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';

function GetMessageView (messageList)
{
    return messageList.map(
        (messageObj, i) =>
            <Message key={i} username={messageObj.user_name} message={messageObj.message} />
        );
}

export default function ConversationContainer() {
  return (
    <Box sx={{}}>
      <MessageSendForm />
    </Box>
  );
}