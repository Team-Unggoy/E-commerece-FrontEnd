import React, { useState } from 'react'
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
import { useHistory } from "react-router-dom";


import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

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

function Signin(props){
    const classes = useStyles();
    let history = useHistory();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault();    
        props.onAuth(username, password)
        history.push('/')
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
                            Login
                        </Typography>
                        
                        <form className={classes.form}>
                            <TextField variant='outlined' onChange={(e) => setUserName(e.target.value)} fullWidth margin='normal' label='Email Address' name='email' required id='email' autoComplete='Email' autoFocus></TextField>
                            <TextField variant='outlined' onChange={(e) => setPassword(e.target.value)} fullWidth margin='normal' label='Password' name='password' required id='password' type='password' autoComplete='current-password'></TextField> 

                            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember Me' />

                            <Button variant='contained' onClick={handleSignIn} className={classes.submit} fullWidth color='primary'>SIGN IN</Button>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Link href='#' variant='body2'>Forgot Password?</Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Link href='/signup' variant='body2'>{"Don't have an Credentials? Sign Up!"}</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </Container>
        </>
    )

}

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)