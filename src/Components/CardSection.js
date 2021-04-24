import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { CardActionArea } from '@material-ui/core';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cake from '../Images/cake1.jpg'
let Cakes = [
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 100,
    image:cake
  },
]




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },

      background:{
        display:'flex',
        justifyContent:'center',
        backgroundRepeat: 'no-repeat',
        position:'relative',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        backgroundColor: '#b0b0b0',
    },

      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },

      buttonForm:{
        alignItems: 'center',
      }

      }));

function CardSection(){


    const classes = useStyles()
    

    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <ArrowForwardIosIcon/>,
      prevArrow: <ArrowBackIosIcon/>,
    };

    return(
        <div className={classes.background}>
          <Container>
            <Typography variant='h3' align='center' color='textPrimary' gutterButtom style={{fontFamily:'Raleway', margin:20}}>
              Cakies
            </Typography>

              <Slider {...settings}>
                {Cakes.map((item, key) => (
                  <CarouselCard item={item}/>
                ))}
              </Slider>
              
              <div className={classes.buttonForm}>
                  <Button variant='contained'>Check All Dainty Cakes</Button>
              </div>
          </Container>
        </div>
    )
}


function CarouselCard(props){
  const classes = useStyles()
  return(
    <div >
      <Container>
        <Card>
          <CardActionArea>
            <CardMedia component='img' height='250' image={props.item.image}/>
              <CardContent>
                <Typography>
                  {props.item.item}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  )
}

export default CardSection