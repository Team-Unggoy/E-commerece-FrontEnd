import {React, useEffect, useState} from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import cafe from '../Images/cafe.jpg'


const theme = createMuiTheme({
    typography:{

    }
})

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        backgroundRepeat: 'no-repeat',
        position:'relative',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        backgroundImage: `url(${cafe})`,
    },

    heroContent:{
        height:'100%',
        width:'100%',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color:'#FFFEFE'
    }
    

}))


function LandingSection() {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.root}>
                <div className={classes.heroContent}>
                    <Typography variant='h1' style={{fontFamily:'Raleway', fontSize:100, color:'teal', textShadow: "1px 3px 1px black"}}>
                        Dainty
                    </Typography>
                    <Typography style={{fontFamily:'RobotoSlab', fontSize:50, textShadow: "1px 3px 1px black" }} variant='h3'>
                        Fresh <br/>
                        Savoury<br/>
                        & <br/>
                        Tasty
                        <br/>
                        <br/>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Button variant='contained' style={{borderRadius:10}} onClick={console.log('dropdown to card sections')} fullWidth color='primary'>View Products</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' style={{borderRadius:10}} fullWidth color='secondary'>Testing</Button>
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <br/>
                    </Typography>
                    
                </div>
            </div>
        </div>
    )
}

export default LandingSection