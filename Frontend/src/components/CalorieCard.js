import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Card, Grid, Typography, CardContent} from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

var cardStyle = {
    borderRadius: '24px',
    display: 'block',
    width: '280px',
    transitionDuration: '0.3s',
    height: '280px',
    color: '#F7FDF9',
    backgroundColor: '#F7FDF9'
}

export const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 8],
        backgroundColor: [
          'rgba(50, 159, 91, 0.2)',
          'rgba(197, 237, 212, 0.2)',
        ],
        borderColor: [
          'rgba(50, 159, 91, 1)',
          'rgba(197, 237, 212, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = { 
    cutout: 60
};

export default function CalorieCard(props) {
    const [userCalorie, setUserCalorie] = useState([])
    
    useEffect(() => {
        axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://35.190.42.252/apiv1/calorie`, {
            params:
            {
                'userId': 'johndoe@gmail.com'
            }
        })
      .then(res => {
        const person = res.data;
        setUserCalorie({ person });
      })
      }, []);
    //   console.log("userCalorie: ", userCalorie)
  return (
        <Card style={cardStyle}>
             <CardContent>
                <Grid 
                    container
                    rowSpacing={2} 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    margin={1}
                    marginTop={1}
                    marginBottom={0}
                >
                    <Grid 
                        container
                        spacing={0}
                        direction="column"
                        color="#F7FDF9"
                    >       
                        <Typography fontWeight={700} fontSize="20px" color="#0C2716" variant="h6" display="block">
                            CALORIE OVERVIEW
                        </Typography>
                        <Typography fontWeight={400} fontSize="16px" color="#329F5B" variant="body1" display="block">
                            Total Consumed
                        </Typography>     
                        <Typography fontWeight={400} fontSize="20px" color="#0C2716" variant="h6" display="block" marginBottom="20px">
                        {userCalorie.person ? userCalorie.person.data.total + props.calorieValue : null} KCal/{userCalorie.person ? userCalorie.person.data.dailyGoal : null} KCal
                    </Typography> 
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    marginBottom="3px"
                >
                    <Grid item xs>
                        <Typography fontSize="16px" color="#0C2716" variant="body1" display="block">
                            Carbs
                        </Typography> 
                        <Typography fontSize="16px" color="#329F5B" variant="body1" display="block">
                            {userCalorie.person ? userCalorie.person.data.carbs : null} g
                        </Typography> 
                        <Typography fontSize="16px" color="#0C2716" variant="body1" display="block">
                            Protein
                        </Typography> 
                        <Typography fontSize="16px" color="#329F5B" variant="body1" display="block">
                        {userCalorie.person ? userCalorie.person.data.protein : null} g
                        </Typography> 
                        <Typography fontSize="16px" color="#0C2716" variant="body1" display="block">
                            Fat
                        </Typography> 
                        <Typography fontSize="16px" color="#329F5B" variant="body1" display="block">
                        {userCalorie.person ? userCalorie.person.data.fats : null} g
                        </Typography> 
                    </Grid>
                    <Grid item xs>
                        <Doughnut data={data} options={options}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  );
}