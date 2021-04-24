import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import { Link, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import dainty_logo from '../Images/dainty_logo.jpg'

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone'

const useStyles = makeStyles((theme) => ({

    paper:{
        marginTop: theme.spacing(8),
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor:theme.palette.secondary.main,
    },

    form:{
        width:'100%',
        marginTop:theme.spacing(2),
    },
    submit:{
        margin:theme.spacing(3,0,2)
    }
}))

export default function Signup(){

    const classes = useStyles();
    const [newAccount, setNewAccount] = useState({})

    const handleSubmit = () => {
        console.log(newAccount)
        var url = 'http://127.0.0.1:8000/api/user-create/'
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                
            },
            'body':JSON.stringify(newAccount)
        })
    }

    return(
        <>
            <Container component='main' maxWidth='xs'>
                <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar src={dainty_logo}/>
                        <Typography>
                            <h3>Sign Up</h3>
                        </Typography>
                    <form className={classes.form}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, first_name:e.target.value})} fullWidth required label='First Name' autoFocus></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, last_name:e.target.value})} fullWidth required label='Last Name'></TextField>
                        </Grid>
                    </Grid>
                    <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, username:e.target.value})} label='Username' fullWidth required ></TextField>
                    <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, email:e.target.value})} label='Email' fullWidth required></TextField>
                    <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, password:e.target.value})} label='Password' fullWidth required name='password' id='password' type='password'></TextField>
                    <TextField variant='outlined' margin='normal' onChange={(e) => setNewAccount({...newAccount, password_compare:e.target.value})} label='Password' fullWidth required name='passowrd-compare' id='password-copare' type='password'></TextField>
                    
                    <Grid container>
                        <Grid item xs={6}>
                            
                    </Grid>
                        <Grid item xs={6}>
                            <Link href='/signin' variant='body2'>{"Already have an account? Sign in!"}</Link>
                        </Grid>
                    </Grid>

                    <Button variant='contained' onClick={handleSubmit} className={classes.submit} fullWidth color='primary'>SIGN IN</Button>
                    </form>
                    </div>

            </Container>
        </>
    )
}