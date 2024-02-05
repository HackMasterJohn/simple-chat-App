import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
export default function MessageSendForm() {
    return (
        <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <Button variant="text">Text</Button>
                </InputAdornment>
            ),
            }}
            variant="standard"
        />
    );
  }