import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import { db } from "../server/firestore.js"; 
import { collection, query, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";



function GetMessageView (messageList)
{
    return messageList.map(
        (messageObj) =>
            <Message key={"ss"} username={messageObj.user_name} message={messageObj.message} />
        );
}

export default function ConversationContainer() {
  const [messageList, updateMessageList] = useState([]);

    const q = query(collection(db, "groupConvo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        // Get list of messages
        var messageObject = doc.data();
        newMessages.push(messageObject)
        updateMessageList(newMessages);
      });
    });

    const messageComponents = GetMessageView(messageList);

    return (
      <Box sx={{ maxWidth: 275 }}>
        {messageComponents}
        <MessageSendForm />
      </Box>
    );
  }