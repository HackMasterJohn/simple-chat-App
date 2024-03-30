import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import { useSelector } from 'react-redux';
import '../css/conversationStyles.css';

function GetMessageView (messageList)
{
  //console.log(messageList);
    return messageList.map(
        (messageObj, i) =>
            <Message key={i} username={messageObj.user_name} message={messageObj.message} num={i}/>
        );
}

export default function ConversationContainer() {

  return (
    <div className="chat">
      { useSelector((state) => GetMessageView(state.group.messages)) }
    </div>
  );
}