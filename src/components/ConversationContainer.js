import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import { useState, useEffect } from "react";
import { RegisterIPAsUser }  from '../server/server.js'

export default function ConversationContainer() {
    const [ip, setIP] = useState("");
    const messageList = [];
    useEffect(() => {
        //passing getIPAddress method to the lifecycle method
        RegisterIPAsUser( setIP );
      }, []);
    const messageComponents = messageList.map((messageObj) =>
        <Message username={messageObj.name} message={messageObj.message} />
    );
    return (
      <Box sx={{ maxWidth: 275 }}>
        {messageComponents}
        <MessageSendForm />
      </Box>
    );
  }