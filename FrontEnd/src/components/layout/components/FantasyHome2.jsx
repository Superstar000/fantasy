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
import Submenubar from './subcomponent/Submenubar';
import main from './../../../img/background/main.png';
import Imagegallery from './subcomponent/Imagegallery';
import Globalleague from './subcomponent/Globalleague';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    backgroundImage: `url(${main})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: '100%',
    height: 'auto'
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
      padding: '20px'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
    },

  },
  reffirst1: {
    [theme.breakpoints.up('lg')]: {
      //marginBottom: 'px'
      color: '#ff2882'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
      color: '#ff2882'
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



export default function FantasyHome(props) {
  const classNamees = useStyles();
  const history = useHistory();
  const { data } = props;
  

  return (
    <div className={classNamees.container}>
      <div className="col-md-12 col-sm-12" style={{ padding: '3% 10%' }}>
        <Card style={{ backgroundColor: '#ff2882' }}>
          <CardContent style={{ padding: '0px' }}>
            <div className="col-md-7 col-sm-12" style={{ padding: "40px" }}>
              <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: "center", color: "white" }}>Sign In</Typography>
              <form className="form-inline" action="/action_page.php">
                <div className="form-group">
                  <label className="sr-only" for="email">Email:</label>
                  <input type="email" className="form-control textboxid " id="email" placeholder="Enter email" name="email" maxlength="411" size='20' />
                </div><div className="form-group">&emsp;</div>
                  <div className="form-group">
                  <label className="sr-only" for="pwd">Password:</label>
                  <input type="password" className="form-control textboxid " id="pwd" placeholder="Enter password" name="pwd" size='20' />
                </div><div className="form-group">&emsp;</div>
                  <button type="submit" className="btn btn-primary" size="large">&emsp;&emsp;<i className="fas fa-arrow-right"></i>&emsp;&emsp;</button>
              </form>&emsp;
              <a href='#'><Typography gutterBottom variant="h6" component="h6" style={{ textAlign: "center", color: "white" }}>
                Forgot your password?
              </Typography></a>
              <a href='#'><Typography gutterBottom variant="h6" component="h6" style={{ textAlign: "center", color: "white" }}>
                 Sign Up
              </Typography></a>
            </div>&emsp;&emsp;
            <div className="col-md-5 col-sm-12" style={{ padding: "40px" }}>
              <h5 style={{ color: 'white' }}>or with this </h5>
                <a href="#" className="fa fa-twitter " ></a>&emsp;
                <a href="#" className="fa fa-facebook "></a>&emsp;
                <a href="#" className="fa fa-linkedin "></a>&emsp;
                <a href="#" className="fa fa-google "></a>&emsp;
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12" style={{ padding: '0% 10%' }}>
        <Card className="card2">
          <CardContent >
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <Typography gutterBottom variant="h4" style={{ color: 'white', textAlign: "center" }}>
                <b>TIME TO GET YOUR RPL DRAFT STARTED</b>
              </Typography>
              <Typography gutterBottom variant="h6" style={{ color: 'white'}}>
                With over 7 million players, Fantasy Premier League is the biggest Fantasy Football game in the world. It’s FREE to play and you can win great prizes!
              </Typography>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ paddingTop: '35px' }}>
              <Button onClick={() => history.push("/register")} variant="contained" color="secondary" size="large" >
                <font style={{ fontSize: "20px" }}>SIGN UP NOW<i className="fas fa-arrow-right"></i></font>
              </Button>
            </div>
         </CardContent>
        </Card>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: '3% 10%' }}>
        <div className="col-md-6 col-sm-6" style={{padding:'0px'}}>
          <Card style={{ backgroundColor: '#ff2882',padding:'30px'}} >
            <CardContent style={{padding:'0px'}} >
              <div className="col-md-12 col-sm-12">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <Imagegallery />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12 card3">
                    <Typography gutterBottom variant="h5" style={{ color: 'white', textAlign: "center" }}>
                      Pick Your Squad
                    </Typography>
                    <Typography gutterBottom variant="h6" style={{ color: 'white'}}>
                      Use your budget of £100m to pick a squad of 15 players from the Premier League.
                    </Typography>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
       
        <div className="col-md-6 col-sm-6" style={{padding:'0px'}}>
          <Card style={{ backgroundColor: '#ff2882',padding:'30px' }} >
            <CardContent style={{padding:'0px'}} >
              <div className="col-md-12 col-sm-12">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <Globalleague />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12 card3">
                    <Typography gutterBottom variant="h5" style={{ color: 'white', textAlign: "center" }}>
                    Create and Join Leagues
                   </Typography>
                    <Typography gutterBottom variant="h6" style={{ color: 'white'}}>
                     Play against friends and family, colleagues or a web community in private leagues.
                    </Typography>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='card4_non_response' style={{ padding: '3% 10%'}}>
        <Card className='card4'>
           <CardContent >
             <div className="col-md-6 col-sm-6">
              <Typography gutterBottom variant="h4" component="h2" style={{ color: '#472059', textAlign: "left" }}>
                GW33 FPL stats: Salah the top captain again
              </Typography>
              <Typography variant="h6" component="h6" style={{ textAlign: "justify" }}>
               Liverpool star is the most-popular armband pick for 10th time this season for Newcastle's visit
                  <br />23/04/2021
                </Typography>
               <div className="card4_button"><a href="#"><ArrowBackIosIcon/></a>&emsp;&emsp; <a href="#"><ArrowForwardIosIcon /></a></div> 
            </div>
          </CardContent>
        </Card>
      </div>
      <div  className= 'card4_response'style={{ padding: '3% 10%'}}>
        <Card className='card4'>
           <CardContent >
             <div className="col-md-12 col-sm-12">
              <Typography gutterBottom variant="h5" component="h5" style={{ color: 'red', textAlign: "center" , marginTop:'100px'}}>
                GW33 FPL stats: Salah the top captain again
              </Typography>
              <Typography variant="h6" component="h6" style={{ textAlign: "justify", padding:'20px', backgroundColor:'white' }}>
               Liverpool star is the most-popular armband pick for 10th time this season for Newcastle's visit
                  <br />23/04/2021
                </Typography>
               <div style={{textAlign:'center',marginTop:'10px'}}><a href="#"><ArrowBackIosIcon/></a>&emsp;&emsp; <a href="#"><ArrowForwardIosIcon /></a></div> 
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
