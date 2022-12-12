import * as React from 'react';
import { useState, useEffect } from 'react';
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
    height: '100px',
    color: '#F7FDF9',
    backgroundColor: '#F7FDF9'
}

export const data = {
    labels: [],
    datasets: [
      {

        data: [15, 5],
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
export default function WaterCard() {
  const [userWater, setUserWater] = useState('')
  useEffect(() => {
    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.get(`http://35.190.42.252/apiv1/water`, {
        params:
        {
            'userId': 'johndoe@gmail.com'
        }
    })
  .then(res => {
    const person = res.data;
    setUserWater({ person });
  })
  }, []);
      // console.log("userWater: ", userWater)

  return (
        <Card style={cardStyle}>
             <CardContent>
                <Grid 
                    container
                    rowSpacing={3} 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    margin={1}
                    marginBottom={0}
                >
                    <Grid 
                        container
                        spacing={0}
                        direction="column"
                        color="#F7FDF9"
                    >       
                        <Typography fontWeight={700} fontSize="20px" color="#0C2716" variant="h6" display="block">
                            WATER CONSUMPTION
                        </Typography>     
                        <Typography fontWeight={400} fontSize="20px" color="#0C2716" variant="body1" display="block" marginBottom={3}>
                        {userWater.person ? userWater.person.data.water : null} ml/3000ml
                    </Typography> 
                    </Grid>
                    <Grid 
                        container
                        spacing={0}
                        direction="row"
                        color="#F7FDF9"
                    >       
                        <Doughnut data={data} options={options}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  );
}