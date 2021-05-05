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
import Submenubar from './subcomponent/Submenubar';

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
    // margin: '30px',
    // [theme.breakpoints.up('md')]: {
    //   margin: "30px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   margin: "30px",
    // },
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

const Button = withStyles((theme) => ({
  root: {
    padding: '10px 40px',
    fontSize: '1rem',
    [theme.breakpoints.up('lg')]: {
      padding: '10px 40px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '4px 10px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 30px',
    },
  }
}))(MuiButton);

const CardActions = withStyles((theme) => ({
  root: {
    padding: '10px',
    [theme.breakpoints.up('lg')]: {
      padding: '14px 25px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '15px 25px ',
    },
  }
}))(MuiCardActions);

export default function FantasyHome(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classes.container} id="buy-space">
     
      <h2 className={classes.title}></h2>

      <div className="col-md-12 col-sm-12">    
         <h2 style={{color:"white",textAlign: 'left',paddingLeft:'100px'}}>Fantasy</h2>
         <Submenubar/>     
          
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '0 5%' }}>  
          <Card >
            <CardActionArea>    
               <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
                REGISTER TO PLAY FANTASY PREMIER LEAGUE DRAFT 
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                With over 7 million players, Fantasy Premier League is the biggest Fantasy Football game in the world. It’s FREE to play and you can win great prizes!                
                </Typography>               
              </CardContent>            
              <div>       
                  <Button onClick = {()=>history.push("/register")}  variant="contained" color="secondary" style={{textAlign:'left',marginRight:"20px"}}>
                    <font style={{textAlign:"left"}}><b>SIGN UP NOW</b></font>
                  </Button>
                   or 
                  <Button onClick = {()=>history.push("/login")}   variant="contained" color="primary" style={{marginLeft:'20px',marginRight:'20px',textAlign:'left'}}>
                    <font style={{textAlign:"left"}}><b>LOG IN</b></font>
                  </Button>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-flickr"></a>
                  </div>
                  <div >&nbsp;</div>
            </CardActionArea>
          </Card>
        
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
        <div className="col-md-7 col-sm-7 fantasyhome">
          <Card style={{backgroundColor:'#ff2882'}} >
            <CardActionArea>                       
              <CardContent >
                <div className="row">
                <div className="col-md-5 col-sm-5">
                <img  
                 src="/img/footballstadium.png"
                title="Contemplative Reptile"
                width="100%" height="100%"
                />    
                </div>
                <div className="col-md-7 col-sm-7">
                <Typography gutterBottom variant="h5" component="h2" style={{color:'white',textAlign: "center"}}>
                PICK YOUR SQUAD
                <br/>
                </Typography>
                <Typography gutterBottom variant="h" component="h6" style={{color:'white',textAlign: "justify"}}>
                If you haven't tried out Draft before, now is the perfect time to try the exciting way to test your FPL skills 15/8/2020           
                </Typography>
                </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-5 col-sm-5" style={{paddingLeft:'0px',paddingLeft:'0px',paddingRight:'0px'}}>
          <Card style={{backgroundColor:"#953bff"}}>         
            <CardActionArea>              
              <CardContent>               
                <Typography gutterBottom variant="h5" component="h2" style={{color:'white',textAlign: "center"}}>
                 CREATE AND JOIN LEAGUES
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{color:'white', textAlign: "left", display: "inline-block" }}>
                  play against friends and family, colleagues or web community in private leagues.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{color:'white', textAlign: "left", display: "inline-block" }}>
                   &nbsp;
                   <br/>
                   &nbsp;
                   <br/>
                </Typography>
              </CardContent>
            </CardActionArea>            
          </Card>              
        </div>
      </div>
      
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
        <Card style={{margin:'0px',padding:'0px'}}>
            <CardActionArea style={{margin:'0px',padding:'0px'}}>             
              <CardContent style={{margin:'0px',padding:'0px'}}>
              <div className="col-md-4" style={{paddingLeft:'0px',paddingRight:'0px'}}>
                 <img  
                 src="/img/blog1.png"
                title="Contemplative Reptile"
                width="100%" height="100%"
                />
               </div>
               <div className="col-md-8" style={{paddingTop:'8%'}}>
                <Typography gutterBottom variant="h5" component="h2" style={{color:'#472059',textAlign: "center"}}>
                <b>TIME TO GET YOUR RPL DRAFT STARTED</b>
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify"}}>                
                  <b>If you haven't tried out Draft before, now is ther perfect time to try the exciting way to
                     test your FPL skills
                     <br/>15/8/2020   
                  </b>
                </Typography>
                </div>                
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
        <Socialbar/>
      </div>



    </div>
  );
}
