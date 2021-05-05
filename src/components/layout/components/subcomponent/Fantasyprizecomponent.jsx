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
    paddingTop: "20px",
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
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});



function Fantasyprizecomponent(props){
    const classes = useStyles();
    const history = useHistory();
    const { data } = props;
      const handleClose = () => {
          //setAnchorEl(null);
          //if (props && props.onClick) {
              props.onMouseOut();
          //}
        };
      

    return(
        <div className="col-md-12 col-sm-12"style={{padding:'3vw'}}>          
          <Card style={{ borderRadius:"5px",color:'#00F1F1'}}>
              <div style={{textAlign:'left',marginLeft:'10px',color:'#283870',fontSize:'24',fontFamily:'Montserrat-Bold'}}> 
                <b>1st Prize – 2020/21 Fantasy Premier League Champion</b>
              </div> 
              <CardContent className={classes.reffirst}>
                <div style={{textAlign:'left',color:'#283870',fontSize:'18',fontFamily:'Montserrat-Regular'}}> 
                <img src="img/cup.png" width="100vw" height="100vw"style={{float:'right'}}></img>
                <i class="fa fa-check-circle-o" style={{fontSize:'18',color:'red'}}></i>
                7-night break in the UK including VIP hospitality at two 2021/22 Premier League matches
                <br/>
                <i class="fa fa-check-circle-o" style={{fontSize:'18',color:'red'}}></i>
                A week’s worth of experiences at popular tourist attractions courtesy of Visit Britain
                <br/>
                <i class="fa fa-check-circle-o" style={{fontSize:'18',color:'red'}}></i>
                Includes travel and 7 nights’ accommodation
                <br/>
                <i class="fa fa-check-circle-o" style={{fontSize:'18',color:'red'}}></i>
                Hublot connecte
                <br/>
              
                </div>
              
              </CardContent>
           </Card>

                         
      {/* </div> */}
    </div>
    )
}

export default Fantasyprizecomponent;