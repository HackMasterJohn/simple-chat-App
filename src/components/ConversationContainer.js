import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';

export default function ConversationContainer() {
    const messageList = 
        [
        {name : "User1 ", message: "This is user1's special message"},
        {name : "User2 ", message: "This is user2's special message"},
        {name : "User3 ", message: "This is user3's special message"} 
        ];
    const messageComponents = messageList.map((messageObj) =>
        <Message username={messageObj.name} message={messageObj.message} />
    );
    return (
      <Box sx={{ maxWidth: 275 }}>
        {messageComponents}
      </Box>
    );
  }