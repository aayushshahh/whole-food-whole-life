import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import axios from 'axios';

var cardStyle = {
    borderRadius: '16px',
    display: 'block',
    width: '280px',
    transitionDuration: '0.3s',
    height: '280px',
    color: '#F7FDF9',
    backgroundColor: '#F7FDF9'
}

export default function ProfileCard() {
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(`http://35.190.42.252/apiv1/profile`, {
            params:
            {
                'userId': 'johndoe@gmail.com'
            }
        })
      .then(res => {
        const person = res.data;
        setUserProfile({ person });
      })
      }, []);
    // console.log("userProfile: ", userProfile)
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
                    marginBottom={0}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        color="#F7FDF9"
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}>E</Avatar>
                        <Typography fontSize="16px" color="#0C2716" variant="overline" display="block">
                            
                            { userProfile.person ? userProfile.person.data.name : null}
                        </Typography>
                        <Typography fontSize="12px" color="#329F5B" variant="caption" display="block" marginBottom={5}>
                        { userProfile.person ? userProfile.person.data.age : null}, { userProfile.person ? userProfile.person.data.location : null}
                        </Typography>
                        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={2} padding={1} fontSize="12px" color="#329F5B" variant="caption" display="block">
                                    Weight
                                </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={2} padding={1} fontSize="12px" color="#329F5B" variant="caption" display="block">
                                    Height
                                </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={2} padding={1} fontSize="12px" color="#329F5B" variant="caption" display="block">
                                    Goal
                                </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={1} padding={1} fontSize="20px" color="#0C2716" variant="caption" display="block">
                                    {  userProfile.person ? userProfile.person.data.weight : null} kg
                                </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={1} padding={1} fontSize="20px" color="#0C2716" variant="caption" display="block">
                                    { userProfile.person ? userProfile.person.data.height : null}cm
                                </Typography>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Typography marginLeft={1} padding={1} fontSize="20px" color="#0C2716" variant="caption" display="block">
                                    {  userProfile.person ? userProfile.person.data.goal : null} kg
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
