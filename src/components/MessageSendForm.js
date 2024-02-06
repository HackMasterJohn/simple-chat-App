import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { UpdateGroupConversation }  from '../server/server.js'

export default function MessageSendForm() {
    return (
        <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
                endAdornment: (
                <TextField value="Hello" onChange={(e) => console.log("hello")}position="end">
                    <Button variant="text">Text</Button>
                </TextField>
            ),
            }}
            variant="standard"
        />
    );
  }