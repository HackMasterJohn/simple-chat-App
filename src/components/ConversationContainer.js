import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import { useState, useEffect } from "react";

export default function ConversationContainer() {
    const [ip, setIP] = useState("");
    async function getIPAddress () {
        await fetch("https://api.ipify.org/?format=json%27")
        .then(response => response.text())
        .then(data => { setIP(data); console.log(data)});
    }
      useEffect(() => {
        //passing getIPAddress method to the lifecycle method
        getIPAddress();
      }, []);
    const messageList = 
        [
        {name : "User: "+ip, message: "This is user1's special message"},
        {name : "User: "+ip, message: "This is user2's special message"},
        {name : "User: "+ip, message: "This is user3's special message"} 
        ];
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