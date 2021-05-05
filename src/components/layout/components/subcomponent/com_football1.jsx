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
 


const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
  
  },
  txtAlign: {
    textAlign: "left"
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    '& > *': {
      margin: theme.spacing(1),
    },
    
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
      marginBottom: '58px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '28px'
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
    primary: purple,
  },
});



export default function Com_pro_stars(props){
    const classNamees = useStyles();
    const history = useHistory();
    const { data } = props;
  
    return (
      
      <div className={classNamees.container} id="buy-space">         
        <div className="col-md-12 col-sm-12" style={{ padding: '0% 10% '}}> 
          <Card>          
              <div className="col-md-4 col-sm-4"> 
                  <CardContent  style={{paddingBottom:'15px'}}>    
                    <a href='#'><img className="zoom" src="/img/background/Stadia.png" width="100%" height="100%"/></a>
                  </CardContent>
              </div>   
              <div className="col-md-8 col-sm-8">
                  <CardContent> 
                    <Typography  gutterBottom variant="h4">
                      <a href="#" className='com_pro_add'>Football Foundation</a>
                    </Typography>
                    <div>&nbsp;</div>
                    <Typography variant="h6" color="textprimary" component="h4">             
                       Find out how the Premier League partners with The FA and Government to support the development of new sports facilities.
                    </Typography>
                  </CardContent>  
              </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          </Card > 
        </div> 
      </div>
    );
  }
