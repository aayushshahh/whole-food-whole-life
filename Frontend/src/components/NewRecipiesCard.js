import * as React from 'react';
import { Card, Grid, Typography, CardContent, IconButton, Button, TextField } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Close } from '@mui/icons-material';

ChartJS.register(ArcElement, Tooltip, Legend);

var cardStyle = {
    borderRadius: '24px',
    display: 'block',
    width: '960px',
    transitionDuration: '0.3s',
    height: '655px',
    color: '#F7FDF9',
    // marginLeft: "-200px",
    backgroundColor: '#F7FDF9'
}

var listCardStyle = {
    borderRadius: '24px',
    display: 'block',
    height: '60px',
    width: '420px',
    transitionDuration: '0.3s',
    backgroundColor: '#EFFAF3',
    margin: '1%'
}

export default function NewRecipiesCard(props) {
    const closeAddRecipie = event => {
        props.addRecipies(false)
    }

    var ingredients = [{name: "Cheese", cal: "200 cal"}]
    const addedIngredients =
    ingredients.map((ingredient) =>
            <Card style={listCardStyle}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography fontSize="14px" color="#0C2716" >
                                {ingredient.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography marginLeft='1em' marginRight='-5em' fontSize="14px" color="#0C2716" >
                                {ingredient.cal}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>)

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Typography fontSize="14px" fontWeight={900} color="#329F5B" variant="overline" display="block" marginBottom={-5} marginLeft={6}>
                    New Recipie
                </Typography>
                <Grid content direction='row' marginLeft='95%'>
                    <IconButton onClick={closeAddRecipie}>
                        <Close style={{ color: '#329F5B', fontSize: '30px' }} />
                    </IconButton>
                </Grid>
                <Grid>
                    <TextField fullWidth id="outlined-basic" label="Name of Recipie" variant="outlined" />
                </Grid>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs={6} md={6}>
                    <Typography fontSize="12px" fontWeight={400} color="#329F5B" variant="overline" display="block">
                            Add Ingredients
                        </Typography>
                        <Card style={listCardStyle}></Card>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography fontSize="12px" fontWeight={400} color="#329F5B" variant="overline" display="block">
                            Added Ingredients
                        </Typography>
                        {addedIngredients}
                    </Grid>
                </Grid>
                <Grid content direction='row' marginLeft='92%' marginTop='10%'>
                    <Button >Save</Button>
                </Grid>
            </CardContent>
        </Card>
    );
}