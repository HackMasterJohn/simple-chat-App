import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { SendGroupMessage }  from '../server/server.js'

export default function MessageSendForm() {
    const [messageContent, setMessageContent] = useState("");
    return (
        <TextField
            onChange={e => setMessageContent(e.target.value)}
            id="input-with-icon-textfield"
            label="Message"
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <Button variant="text" onClick={(e) => SendGroupMessage(messageContent)}>Send</Button>
                </InputAdornment>
            ),
            }}
            variant="standard"
        />
    );
  }