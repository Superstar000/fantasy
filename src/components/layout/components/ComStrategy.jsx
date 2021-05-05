import React from 'react';
import { useHistory } from "react-router-dom"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MuiButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Socialbar from './subcomponent/socialbar';


const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px"


  },
  txtAlign: {
    textAlign: "left"
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
      marginRight: 0,
      marginLeft: 0
    },
  },
  title: {
    fontFamily: "initial",
    marginBottom: "60px"
  },
  reffirst: {
    [theme.breakpoints.up('lg')]: {
      //marginBottom: 'px'
      padding:'20px'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
    },
    
  },  
  reffirst1: {
    [theme.breakpoints.up('lg')]: {
      //marginBottom: 'px'
      color:'#ff2882'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
      color:'#ff2882'
    },
    
  },


  minH: {
    [theme.breakpoints.up('md')]: {
      minHeight: '270px'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '270px'
    },
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});


const typotitle={
  textAlign: "left",
  color: "#37003c"
}
const typotitle1={
  textAlign: "center",
  color: "#37003c"
}

export default function FantasyHome(props) {
  const classNamees = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classNamees.container} id="buy-space">
     
      <div className="col-md-12 col-sm-12" style={{ padding: '70px 10% 20px' }}>    
         <h1 style={{color:"white",textAlign: 'left',fontFamily:'fantasy'}}> STRATEGY</h1>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: '0 10%' }}>
             
          <Card>      
            <CardContent style={{padding:'0px',margin:'0px'}}>                
                <picture >
                    <img src="/img/background/videodash.png"  width="100%" height="100%"/>
                </picture>
              <CardContent style={{padding:'30px'}}> <div >&nbsp;</div> 
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                  The success of the Premier League both on and off the pitch enables the League to support and invest in communities and schools, and in the wider game, at a scale which is unprecedented in professional sport.<div>&nbsp;</div>
                  The Premier League not only supports the 20 Premier League clubs but also 72 English Football League and 68 National League clubs to deliver community programmes across England and Wales.<div>&nbsp;</div>
                  As a founding member and funder of the Football Foundation, the Premier League is also committed to supporting investment in football pitches and sports facilities in communities across the country.<div>&nbsp;</div>        
                </Typography>               
            
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b>Community Programmes Strategy 2019 - 2022 </b>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}> 
                  The Premier League Communities Strategy is focused on using the reach and appeal of the Premier League and professional football clubs to inspire children and young people (5 to 25) to realise their potential. 
                </Typography>             
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                  Four key objectives underpin the strategy:
                </Typography> <div >&nbsp;</div>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                   -Building stronger communities where everyone can achieve<br/>
                   -Enhancing physical and mental wellbeing<br/>
                   -Developing personal skills and positive relationships<br/>
                   -Increasing sporting, educational and employment opportunities 
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                The strategy is delivered primarily through three major national programmes: 
                </Typography> <div >&nbsp;</div>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                  <b>Premier League Primary Stars</b> – inspiring children aged 5–11 to learn, be active and develop important life skills<br/>
                  <b>Premier League Inspires</b> – inspiring children and young people to develop the personal skills and positive attitudes to succeed in life<br/>
                  <b>Premier League Kicks</b> – inspiring young people to achieve their potential and improve their wellbeing; working together to build stronger, safer and more inclusive communities<br/>
                </Typography>
                </CardContent>
              </CardContent>
            </Card>
              <div >&nbsp;</div>
              <Card>               
                <CardContent style={{padding:'50px'}}>
                <Typography gutterBottom variant="h5" style={typotitle1}>
                <b>Using the appeal of the PRemier League and professional professional clubs to inspire children and young people to realise their ptential.</b>
                </Typography><div >&nbsp;</div>
                  <picture>
                    <img src='img/background/strategy1.png' width='100%' height='100%'/>
                  </picture>
                </CardContent>
              </Card>
                
        </div>
      <div className="col-md-12 col-sm-12"  style={{ padding: '5% 10%' }}>  
        <Socialbar/>
      </div>
    </div>  
    )
}
