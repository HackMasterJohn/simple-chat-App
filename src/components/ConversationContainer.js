import * as React from 'react';
import Box from '@mui/material/Box';
import Message from './Message';
import MessageSendForm from './MessageSendForm';
import LoginForm from './LoginForm';
import { useState } from "react";
import { PullGroupConversation } from '../server/server.js';
import { GetIPAddress } from '../server/server.js';
import { LookUpUserIp } from '../server/server.js';


function GetMessageView (messageList)
{
    return messageList.map(
        (messageObj, i) =>
            <Message key={i} username={messageObj.user_name} message={messageObj.message} />
        );
}

function renderMessages(messageList, updateMessageList)
{
  PullGroupConversation(updateMessageList);
  const messageComponents = GetMessageView(messageList);
  return <div> {messageComponents} <MessageSendForm /> </div>;
}
export default function ConversationContainer() {
  const [messageList, updateMessageList] = useState([]);
  const [userIP, setUserIP] = useState("");
  const [userName, setUserName] = useState("");
  const [userAuth, setUserAuth] = useState(false);

  // Get IP Address for device
  GetIPAddress( (data) => setUserIP(data) );

  // If the IP address exists.
  var userObject = null;
  if (LookUpUserIp (userIP, (obj) => userObject = obj))
  {
      //setUserIP(userObject.user_ip);
      //setUserName(userObject.user_name);
      setUserAuth(false);
  }
  

  return (
    <Box sx={{}}>
    { 
      !userAuth && renderMessages(messageList, updateMessageList)
    }
    {
      !userAuth && <LoginForm/>
    }
    </Box>
  );
}