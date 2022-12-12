import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Grid } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

export const options_calorie = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        y:
        {
            min: 1000,
            max: 5000,
            stepSize: 1
        },
        x:
            {},
    },
};

export const options_weight = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        y:
        {
            min: 0,
            max: 100,
            stepSize: 1
        },
        x:
            {},
    },
};

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
const weight_data = {
    labels,
    datasets: [
        {
            label: 'Display by Weight',
            data: [75, 75, 77, 76, 79, 80, 80],
            fill: true,
            borderColor: '#329F5B',
            backgroundColor: '#F7FDF9',
        }
    ],
};

export default function CalorieCard() {
    const [weight, showWeight] = useState(false);
    const [calorie, showCalorie] = useState(true);
    const [userGraphData, setUserGraphData] = useState([])

    useEffect(() => {
        axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://35.190.42.252/apiv1/graph`, {
            params:
            {
                'userId': 'johndoe@gmail.com'
            }
        })
      .then(res => {
        const person = res.data;
        setUserGraphData({ person });
      })
      }, []);
    //   console.log("userGraphData: ", userGraphData)

    const setWeightShown = event => {
        showWeight(true);
        showCalorie(false);
    }
    const setCalorieShown = event => {
        showWeight(false);
        showCalorie(true);
    }
    var calorieData = []
    if (userGraphData.person){
        calorieData = userGraphData.person.data
    }
    else
        calorieData =  [1950, 2000, 2235, 1660, 3200, 1890, 1900]

        const calorie_data = {
        labels,
        datasets: [
            {
                label: 'Display by Calorie',
                data: calorieData,
                fill: true,
                borderColor: '#329F5B',
                backgroundColor: '#F7FDF9',
            }
        ],
    };

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Grid container direction="row" justifyContent='center'>
                    <Button onClick={setCalorieShown}>Calorie</Button>
                    <Button onClick={setWeightShown}>Weight</Button>
                </Grid>
                <Grid container direction="row">
                    {weight ? <Grid item md={11}> <Line data={weight_data} height="500px" options={options_weight} /> </Grid> : null}
                    {calorie ? <Grid item md={11}> <Line data={calorie_data} height="500px" options={options_calorie} /> </Grid> : null}
                </Grid>
            </CardContent>
        </Card>
    );
}