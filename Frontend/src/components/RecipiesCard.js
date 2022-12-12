import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
    Card, 
    Grid, 
    CardContent, 
    IconButton, 
    Typography, 
    Modal, 
    TextField, 
    Button, 
    FormControl,
    Box 
} from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Close, AddCircle } from '@mui/icons-material';
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

var modalCardStyle = {
    borderRadius: '24px',
    display: 'block',
    width: '960px',
    transitionDuration: '0.3s',
    height: '655px',
    color: '#F7FDF9',
    marginTop: "5%",
    marginLeft: "24%",
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
export default function RecipiesCard(props) {
    const closeRecipies = event => {
        props.showRecipies(false)
    }

    var formValues = {
        'userId': ' johndoe@gmail.com',
        'recipeName': 'Recipe Name',
        'calories': '1200',
        'servingSize': '1',
        'carbs': '40',
        'fats':'20',
        'protein': '20',
    }
    const [newRecipie, setNewRecipie] = useState(false)
    const handleOpen = () => setNewRecipie(true);
    const handleClose = () => setNewRecipie(false);

    const [itemIngredient, setItemIngredient] = useState('');
    var ingredients = []
    const handleChange = (event, ingredients) => {
        console.log("value: ", event.target.value.name)
        setItemIngredient(event.target.value.name);
        ingredients.push(event.target.value)
      };
    console.log("ingredients: ", ingredients)  
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
    
    const [userRecipieData, setUserRecipieData] = useState([]);
    
    const updateRecipie = event => {}
    useEffect(() => {
        axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://35.190.42.252/apiv1/getRecipe`, {
            params:
            {
                'userId': 'johndoe@gmail.com'
            }
        })
            .then(res => {
                const person = res.data;
                setUserRecipieData({ person });
            })
    }, []);
    console.log("userRecipieData: ", userRecipieData)

    var recipies = []
    recipies = [{ name: 'Grilled Cheese', cal: "800 Cal" }, { name: 'Cava', cal: "750 Cal" }, { name: 'Strawberry Smoothie', cal: "300 Cal" }, { name: 'Apple Pie', cal: "300 Cal" }]

    const listItems =
        recipies.map((recipie) =>
            <Card style={listCardStyle}>
                <CardContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Typography marginLeft='1em' fontSize="14px" color="#0C2716" >
                                {recipie.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography marginLeft='9em' marginRight='-15em' fontSize="14px" color="#0C2716" >
                                {recipie.cal}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>)
    return (
        <Card style={cardStyle}>
            <CardContent>
                <Grid content direction='row' marginLeft='95%'>
                    <IconButton onClick={closeRecipies}>
                        <Close style={{ color: '#329F5B', fontSize: '30px' }} />
                    </IconButton>
                </Grid>
                <Grid>
                    <Typography fontSize="20px" fontWeight={900} color="#0C2716" variant="overline" display="block" marginBottom={-5} marginLeft={6}>
                        Your Recipies
                    </Typography>
                </Grid>
                <Grid content direction='row'>
                    <Grid direction='column' marginTop='5%'>
                        {listItems}
                    </Grid>
                </Grid>
                <Grid content direction='row' marginLeft='92%' marginTop='20%'>
                    <IconButton onClick={handleOpen}>
                        <AddCircle style={{ color: '#329F5B', fontSize: '60px' }} />
                    </IconButton>
                </Grid>
                <Modal
                    open={newRecipie}
                    onClose={handleClose}
                >
                    <Card style={modalCardStyle}>
                        <CardContent>
                            <Typography fontSize="14px" fontWeight={900} color="#329F5B" variant="overline" display="block" marginBottom={-5} marginLeft={6}>
                                New Recipie
                            </Typography>
                            <Grid content direction='row' marginLeft='95%'>
                                <IconButton onClick={handleClose}>
                                    <Close style={{ color: '#329F5B', fontSize: '30px' }} />
                                </IconButton>
                            </Grid>

                            <Grid container direction='row' spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <TextField fullWidth id="outlined-basic" label="Name of Recipie" variant="outlined"/>
                                    <Typography fontSize="12px" fontWeight={400} color="#329F5B" variant="overline" display="block">
                                        Add Ingredients
                                    </Typography>
                                    <FormControl fullWidth>
                                        <Grid marginBottom="5%">
                                            <TextField fullWidth id="outlined-basic" label="Ingredient" variant="outlined"/>
                                        </Grid>
                                        <Grid>
                                            <TextField fullWidth id="outlined-basic" label="Calorific Value" variant="outlined"/>
                                        </Grid>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid content direction='row' marginLeft='92%' marginTop='10%'>
                                <Button onClick={handleClose}>Save</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Modal>

            </CardContent>
        </Card>
    );
}