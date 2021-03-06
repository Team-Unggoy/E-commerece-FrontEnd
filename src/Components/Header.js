import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';  
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {DrawerData} from './DrawerData';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button'
import dainty_logo from '../Images/dainty_logo.jpg'

import * as actions from '../store/actions/auth'
import { connect } from 'react-redux'
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  nested:{
    paddingLeft: theme.spacing(4),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  activeDrawer:{
    
    backgroundColor:'#282c34 !important',
    textDecoration:'none',
    color:'black',
  },
  list:{
    width: 240,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = (props) =>{
  const classes = useStyles();
  let history = useHistory();

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () =>{
    setDrawerOpen(!drawerOpen)
  }

  console.log(props.isAuthenticated)
  console.log(props)


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            <Avatar src={dainty_logo} className={classes.small}/>
          </Typography>
          {props.isAuthenticated ? (
            <Button color='inherit' onClick={props.logout}>Logout</Button>):(
              <Button color='inherit' onClick={() => history.push('/signin')}>Login</Button>
            )
            }
        </Toolbar>
      </AppBar> 


        <Drawer onClose={toggleDrawer} open={drawerOpen}>
                <List subheader={
                <ListSubheader component="div" id="nested-list-subheader">Sidebar</ListSubheader>} 
                  className={classes.list}>
                    {DrawerData.map((prop, key) => {
                      return(
                        <NavLink className={classes.activeDrawer} to={prop.path} key={key}>

                        <ListItem onClick={toggleDrawer} button key={prop.text}>
                            {prop.icon && <ListItemIcon>{prop.icon}</ListItemIcon>}
                            <ListItemText primary={prop.text}/>
                        </ListItem>
                        </NavLink>
                        );
                      })}
                </List>
            </Drawer>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Header))