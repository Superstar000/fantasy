import React, { useState, useRef, useEffect } from 'react';
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
import Com_pro_inspire from './subcomponent/com_pro_inspire';
import Com_pro_kicks from './subcomponent/com_pro_kicks';
import Com_pro_stars from './subcomponent/com_football2';







const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
  
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

const Button = withStyles((theme) => ({
  root: {
    padding: '10px',
    fontSize: '1rem',
    color: 'white',
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



export  default function FantasyHome(props) {
  const classNamees = useStyles();
  const history = useHistory();
  const { data } = props;
   const [tabval, setTabva] = useState(0);

   const onChang = (val) => {
      setTabva(val);
  }

  return (
    
    <div className={classNamees.container} id="buy-space">
      <div className="col-md-12 col-sm-12" style={{ padding: '70px 10% 20px'}}> 
         <h1 style={{color:"white",textAlign: 'left',fontFamily:'fantasy'}}>PROGRAMMES</h1>
         <div className={classNamees.root}>
         <Button variant="contained" color="secondary" onClick={() => {onChang(0) }}>PL Primary stars</Button>
         <Button variant="contained" color="secondary"  onClick={() => {onChang(1) }}>PL Kicks</Button>
         <Button variant="contained" color="secondary" onClick={() => {onChang(2) }}>PL Inspries</Button>
         </div> 
      </div>  
        {tabval==0? <Com_pro_stars/>:''}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        {tabval==1? <Com_pro_kicks/>:''}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        {tabval==2? <Com_pro_inspire/>:''}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      <div className="col-md-12 col-sm-12"  style={{ padding: '5% 10%' }}>  
        <Socialbar/> 
      </div>
    </div> 
  );
}
