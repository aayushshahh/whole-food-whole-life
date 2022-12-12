import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Grid, Typography, CardContent, Button, IconButton, TextField, FormControl } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

var cardStyle = {
    borderRadius: '24px',
    display: 'block',
    width: '960px',
    transitionDuration: '0.3s',
    height: '655px',
    color: '#F7FDF9',
    marginLeft: "-200px",
    backgroundColor: '#F7FDF9'
}

var listCardStyle = {
    borderRadius: '24px',
    display: 'block',
    height: '180px',
    width: '300px',
    transitionDuration: '0.3s',
    backgroundColor: '#EFFAF3',
    margin: '1%'
}

export default function MealsCard(props) {
    const closeMeals = event => {
        props.showMeals(false)
    }
    const updateCalorie = event => {
        props.calorieValue = 375
    }
    const [userFood, setUserFood] = useState('')
    const getMeal = () => {
        axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://35.190.42.252/apiv1/searchMeal`, {
            params:
            {
                'searchItem': 'Pasta',
            }
        })
        .then(res => {
        const person = res.data;
        setUserFood({ person });
        })
    }
        console.log("userFood: ", userFood)
    var items = ''
    if(userFood.person) {
        const itemData = userFood.person ? userFood.person.data : null
        items = itemData.map((foodItem) =>
        
        <Button onClick={updateCalorie}>
            <Card style={listCardStyle} >
                <CardContent>
                    <Grid item xs>
                        <Typography fontSize="12px" color="#0C2716" variant="body1" display="block">
                        Food Type
                        </Typography> 
                        <Typography fontSize="12px" color="#329F5B" variant="body1" display="block">
                            {foodItem.Description}
                        </Typography> 
                        <Typography fontSize="12px" color="#0C2716" variant="body1" display="block">
                            Calorific Value
                        </Typography> 
                        <Typography fontSize="12px" color="#329F5B" variant="body1" display="block">
                            {foodItem.Data.Kilocalories}
                        </Typography> 
                        <Typography fontSize="12px" color="#0C2716" variant="body1" display="block">
                            Total Carbohydrate
                        </Typography> 
                        <Typography fontSize="12px" color="#329F5B" variant="body1" display="block">
                            {foodItem.Data.Carbohydrate}
                        </Typography> 
                        <Typography fontSize="12px" color="#0C2716" variant="body1" display="block">
                            Total Protein
                        </Typography> 
                        <Typography fontSize="12px" color="#329F5B" variant="body1" display="block">
                            {foodItem.Data.Protein}
                        </Typography> 
                    </Grid>
                </CardContent>
            </Card>
        </Button>)
        }
    
    return (
        <Card style={cardStyle}>
            <CardContent>
                <Grid content direction='row' marginLeft='95%'>
                    <IconButton onClick={closeMeals}>
                        <CloseIcon style={{ color: '#329F5B', fontSize: '30px' }} />
                    </IconButton>    
                </Grid>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography fontSize="12px" fontWeight={400} color="#329F5B" variant="overline" display="block">
                            Add Meal
                        </Typography>
                        <FormControl fullWidth>
                            <Grid marginBottom='-5%'>
                                <TextField fullWidth id="outlined-basic" label="Meal" variant="outlined"/>
                            </Grid>
    
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid content direction='row' marginLeft='92%' marginTop='10%'>
                    <Button onClick={getMeal}>Search</Button>
                </Grid>
                {items}
            </CardContent>
        </Card>
    );
}