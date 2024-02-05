import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Message(props) {
  return (
    <Card variant="outlined">
        <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.username}
            </Typography>
            <Typography variant="p" component="div">
            {props.message}
            </Typography>
        </CardContent>
    </Card>
  );
}
