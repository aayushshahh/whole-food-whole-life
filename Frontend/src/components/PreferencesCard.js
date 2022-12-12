import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Card, Grid, Typography, CardContent} from '@mui/material';
  
export default function PreferencesCard() {
  return (
        <Card color='#F7FDF9'>
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
                        <Typography color="#0C2716" variant="h6" display="block">
                            WATER CONSUMPTION
                        </Typography>     
                        <Typography color="#0C2716" variant="h6" display="block" marginBottom={3}>
                            1000ml/3000ml
                    </Typography> 
                    </Grid>
                    <Grid 
                        container
                        spacing={0}
                        direction="column"
                        color="#F7FDF9"
                    >       
                       <Avatar sx={{ bgcolor: deepOrange[500], width: 80, height: 80}}>E</Avatar> 
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  );
}