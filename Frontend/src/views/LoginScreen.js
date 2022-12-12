import * as React from 'react';
import { Box, Grid, FormControl, Typography, TextField, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom'

var modalCardStyle = {
    borderRadius: '24px',
    display: 'block',
    width: '600px',
    transitionDuration: '0.3s',
    height: '400px',
    color: '#F7FDF9',
    marginTop: "5%",
    marginLeft: "24%",
    backgroundColor: '#F7FDF9'
}

export default function Login() {
  const history = useNavigate();
  const redirect = () => {
    history('/home')
  }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#EFFAF3' }}>
      <Typography fontSize="24px" fontWeight={900} color="#329F5B" variant="overline" display="block" marginBottom={-5} marginLeft={6}>
        Whole Food Whole Life
      </Typography>
      <Grid container spacing={4} margin={1}>
      <Card style={modalCardStyle}>
        <FormControl >
                <Grid container direction='row' marginLeft ='100%' marginTop='50%' marginBottom='5%'>
                    <Grid marginBottom="5%">
                        <TextField id="outlined-basic" label="Username" variant="outlined"/>
                    </Grid>
                </Grid>
                <Grid container direction='row' marginLeft ='100%' marginTop='-6%'>
                    <Grid >
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined"/>
                    </Grid>
                </Grid>
            </FormControl>
            <Grid content direction='row' marginLeft='80%' marginTop='10%'>
                <Button onClick={redirect}>Login</Button>
            </Grid>
        </Card>
      </Grid>
    </Box>
  );
}
