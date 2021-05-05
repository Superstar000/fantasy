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

export default function Fixtures(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    // <div className="row" style={{ width:"auto",padding: '0 100px' }}> 
       <div className="col-md-12 col-sm-12" style={{padding:'0px'}}>       
          <Card >
            <CardActionArea>              
              <CardContent>                             
              <div className="col-md-12 col-sm-12" style={{textAlign: 'center'}} style={{padding:'5px'}}>
                Friday 16 April 2021
                </div>  
                <div className="col-md-12 col-sm-12 pb-2">
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>    
                    <div style={{fontSize:'10px'}}>EVERETON</div>                    
                    </div>
                    <div className="col-md-4 col-sm-4">
                     <h3><b>00:00</b></h3>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>
                    <div style={{fontSize:'10px'}}> SPURS  </div>
                    </div>
                </div>               
                <div className="col-md-12 col-sm-12 pb-2">
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>    
                    <div style={{fontSize:'10px'}}> EVERETON </div>                    
                    </div>
                    <div className="col-md-4 col-sm-4">
                     <h3><b>00:00</b></h3>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>
                    <div style={{fontSize:'10px'}}> SPURS  </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 pb-2" style={{textAlign: 'center'}} style={{padding:'5px'}}>
                Saturday 18 April 2021
                </div>
                <div className="col-md-12 col-sm-12 pb-2">
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>    
                    <div style={{fontSize:'10px'}}> EVERETON </div>                    
                    </div>
                    <div className="col-md-4 col-sm-4">
                     <h3><b>00:00</b></h3>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>
                    <div style={{fontSize:'10px'}}> SPURS  </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 p-20">
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>    
                    <div style={{fontSize:'10px'}}> EVERETON </div>                    
                    </div>
                    <div className="col-md-4 col-sm-4">
                     <h3><b>00:00</b></h3>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div> <img src="./img/t8.png"/> </div>
                    <div style={{fontSize:'10px'}}> SPURS  </div>
                    </div>
                </div>                
              </CardContent>
            </CardActionArea>
          </Card>           
        </div>
    // </div>
  );
}