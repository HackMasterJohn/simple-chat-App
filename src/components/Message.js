import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
    <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        User 1
        </Typography>
        <Typography variant="h5" component="div">
        Some message
        </Typography>
    </CardContent>
);

export default function Message() {
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
