import React from 'react'
import { Typography, AppBar, Button, CssBaseline,  Toolbar, Grid, Container, CardMedia, Card, CardContent, CardActions} from '@mui/material'
import useStyles from './style'

export default function MyCard(props) {
    const classes = useStyles()
  return (
    <>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={props.imageUrl}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {props.title} 
                    </Typography>
                    <Typography>
                        {props.description}  
                    </Typography>
                    <CardActions className={classes.cardButton}> 
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='primary'>Edit</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    </>
  )
}
