import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { AccessTime, Tune } from '@mui/icons-material';
import ProfileCard from '../components/ProfileCard';
import CalorieCard from '../components/CalorieCard';
import WaterCard from '../components/WaterCard';
import GraphCard from '../components/GraphCard';
import MealsCard from '../components/MealsCard';
import RecipiesCard from '../components/RecipiesCard';

export default function Home() {
  const[meals, showMeals] = useState(false);
  const[recipies, showRecipies] = useState(false);

  const setShowMeals = event => {
    showMeals(true)
  }

  const setShowRecipies = event => [
    showRecipies(true)
  ]
  let calorieValue = 357;
  let element;
  if(meals){
    element = <MealsCard showMeals={showMeals} calorieValue={calorieValue}/>
  }
  else if(recipies){
    element = <RecipiesCard showRecipies={showRecipies}/>
  }
  else{
    element = <GraphCard />
  }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#EFFAF3' }}>
      <Typography fontSize="24px" fontWeight={900} color="#329F5B" variant="overline" display="block" marginBottom={-5} marginLeft={6}>
        Whole Food Whole Life
      </Typography>
      <Grid container spacing={4} margin={1}>
        <Grid item xs={6} md={4} margin={1}>
          <Grid container direction="row" marginBottom={1}>
            {<ProfileCard />}
          </Grid>
          <Grid container direction="row" marginBottom={1}>
            <Button
              style={{
                borderRadius: "16px",
                backgroundColor: "#C5EDD4",
                padding: "8px 8px",
                width: "130px",
                height: "60px",
                margin: "10px",
                marginLeft: '0px'
              }}
              variant="contained"
              onClick={setShowMeals}
            >
              <Typography
                fontSize={14}
                color="#329F5B"
                variant="overline"
                display="block"
              >
                Add Meals
              </Typography>
            </Button>
            <Button
              style={{
                borderRadius: '16px',
                backgroundColor: "#C5EDD4",
                padding: "8px 8px",
                fontSize: "18px",
                width: "130px",
                height: "60px",
                margin: "10px"

              }}
              variant="contained"
              onClick={setShowRecipies}
            >
              <Typography
                fontSize={14}
                color="#329F5B"
                variant="overline"
                display="block"
              >
                Recipies
              </Typography>
            </Button>
          </Grid>
          <Grid container direction="row" marginBottom={2}>
            <CalorieCard calorieValue={calorieValue}/>
          </Grid>
          <Grid container direction="row" marginBottom={1}>
            <WaterCard />
          </Grid>

        </Grid>
        <Grid item xs={6} md={5} margin={1}>
          {element}
          <Grid container direction="row" margin={2}>
            <Button
              style={{
                borderRadius: "16px",
                backgroundColor: "#F7FDF9",
                padding: "8px 8px",
                width: "160px",
                height: "100px",
                marginLeft: "-210px",
              }}
              variant="contained"
            >
              <Grid>
                <AccessTime style={{ color: '#329F5B', fontSize: '30px' }}/>
                <Typography
                  fontSize={14}
                  color="#329F5B"
                  variant="overline"
                  display="block"
                >
                  History
                </Typography>
              </Grid>
            </Button>
            <Button
              style={{
                borderRadius: '16px',
                backgroundColor: "#F7FDF9",
                padding: "8px 8px",
                fontSize: "18px",
                width: "160px",
                height: "100px",
                marginLeft: "20px"
              }}
              variant="contained"
            >
              <Grid>
                <Tune style={{ color: '#329F5B', fontSize: '30px' }}/>
                <Typography
                  fontSize={14}
                  color="#329F5B"
                  variant="overline"
                  display="block"
                >
                  Preferences
                </Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
