import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../css/conversationStyles.css'


export default function Message(props) {
  console.log(props);
  if (props.num % 2 == 0)
  {
    return CreateOtherUserMessage(props.message, "Username", props.num);
  }
  else
  {
    return CreateCurrentUserMessage(props.message, props.num);
  }
}


function CreateCurrentUserMessage(message){
  return (
    <div class="current messages">
      <div className="message last">
      {message}
      <br></br>
      <p><strong>You</strong></p>
      </div>
    </div>
  );
}

function CreateOtherUserMessage(message, username){
  return(
    <div class="other messages">
      <div className="message last">
      {message}
      <br></br>
      <p><strong>{username}</strong></p>
      </div>
    </div>
  )
}

/*
<Card variant="outlined">
<CardContent >
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    {props.username}
    </Typography>
    <Typography variant="p" component="div">
    {props.message}
    </Typography>
</CardContent>
</Card>*/