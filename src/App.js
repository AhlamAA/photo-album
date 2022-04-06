import React from 'react'
import { Typography, AppBar, Button, CssBaseline,  Toolbar, Grid, Container} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import useStyles from './style'
import Data from './Data'
import MyCard from './MyCard'


export default function App() {
    const classes = useStyles()
    const cards = Data.map(card => {
        return (
            <MyCard 
                {...card}
            />
        )
    })
  return (
    <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar> 
        <main>
            <div className={classes.container}>
                <Container maxWidth='sm'>
                    {/* gutterBottom -> add margin under it */}
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom > 
                        Photo Album 
                    </Typography>
                    {/* paragraph -> make sure thet it loops through the lines !! */}
                    <Typography variant='h5' align='center' color='textSecondary' paragraph > 
                        Hello everyone this is a photo album and I'm trying to make this sentences as long as possible so we can see hoe does it look like on the screen :)
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justifyContent='center' >
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item> 
                                <Button variant='outlined' color='primary'>
                                    Any secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards}
                </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Done :) 
            </Typography>
            <Typography variant='subtitle1' align='center' gutterBottom>
                Made by Ahlam Alsaedi, in order to practice my React and Material UI. 
            </Typography>
        </footer>  
    </>
  )
}
