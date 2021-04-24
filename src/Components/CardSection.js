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
    price: 200,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 300,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 400,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 500,
    image:cake
  },
  {
    item:'We bare bears cake',
    description:'This Cake is best for eating',
    price: 600,
    image:cake
  },
]




const useStyles = makeStyles((theme) => ({

      background:{
        display:'flex',
        backgroundColor: '#b0b0b0',
    },


      form:{
      
        display:'flex',
        justifyContent:'center',
      }

      }));

function CardSection(){


    const classes = useStyles()
    

    const settings = {
      dots:true,
      infinite: true,
      centerMode:true,
      swipeToSlide: true,
      className: "center",
      centerPadding: "60px",
      slidesToShow: 4,
    };

    return(
        <div className={classes.background}>
          <Container>
            <Typography variant='h3' color='textPrimary' gutterButtom style={{fontFamily:'Raleway', margin:20}}> 
              Cakies
            </Typography>

              <Slider {...settings}>
                {Cakes.map((item, key) => (
                  <CarouselCard item={item}/>
                ))}
              </Slider>

              <br/>
              <br/>
              <br/>

                  <div className={classes.form}>
                    <Button variant='contained' color='primary' >View all Cakies</Button>
                  </div>
          </Container>

        </div>
    )
}


function CarouselCard(props){
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
                <Typography style={{color:'greenyellow'}}>
                  {props.item.price}
                </Typography>
                <Typography variant='body2' component='p' color='textSecondary'>
                  {props.item.description}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  )
}

export default CardSection