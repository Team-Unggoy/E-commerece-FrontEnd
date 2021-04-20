import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { CssBaseline, FormControlLabel, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor:theme.palette.secondary.main,
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(2)
    },
    submit:{
        margin:theme.spacing(3, 0, 2),
    }
}));

function Signin(){
    const classes = useStyles();

    const handleSignIn = () =>{
        console.log('testing')
    }

    return(
        <>
            <Container component='main' maxWidth='xs'>
                <CssBaseline/>
                    <div className={classes.paper}>   
                        <Avatar className={classes.avatar}>
                            <LockTwoToneIcon/>
                        </Avatar>
                        <Typography component='h1' variant='h5'>
                            Sign in
                        </Typography>
                        
                        <form className={classes.form}>
                            <TextField variant='outlined' fullWidth margin='normal' label='Email Address' name='email' required id='email' autoComplete='Email' autoFocus></TextField>
                            <TextField variant='outlined' fullWidth margin='normal' label='Password' name='password' required id='password' type='password' autoComplete='current-password'></TextField> 

                            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember Me' />

                            <Button variant='contained' onClick={handleSignIn} className={classes.submit} fullWidth color='primary'>SIGN IN</Button>

                            <Grid container>
                                <Grid item xs='6'>
                                    <Link href='#' variant='body2'>Forgot Password?</Link>
                                </Grid>
                                <Grid item xs='6'>
                                    <Link href='/signup' variant='body2'>{"Don't have an account? Sign Up!"}</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </Container>
        </>
    )

}

export default Signin