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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Socialbar from './subcomponent/socialbar';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import Fantasywinnerscomponent from './subcomponent/Fantasywinnerscomponent';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import Menu from '@material-ui/core/Menu';


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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    borderRadius:'10px',
    margin: theme.spacing(2),
  },

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

export default function Premierreferees(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  const [age, setAge] = React.useState('');

  const handleChangeage = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.container} id="buy-space">
        
      <h2 className={classes.title}></h2>
      <div className="text-center"style={{color:"#585858",fontSize:'49px',fontFamily:'Montserrat-Bold',textAlign: 'center',paddingLeft:'5%',paddingRight:'5%'}}>
        {/* <b>Prize Winners */}
        <Card>
        <Button
            color="secondary"
            style={{ position: "relative", height: "50px" }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            href="#/fantasyprizes"
          >
            <b>Prizes</b>
          </Button>
          <Button
            color="secondary"
            style={{ position: "relative", height: "50px" }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            href="#/fantasywinners"
          >
            <b>Winners</b>
          </Button>
          </Card>
        {/* </b> */}
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: '0 5%' }}>        
      <div className="col-md-6 col-sm-6" style={{paddingTop:'5px'}}>
          <div style={{fontSize:'24px',color:'#585858',fontFamily:'Montserrat-Bold',textAlign:'left',fontFamily:'Montserrat-Bold'}}>
              <b>Gameweek Winners</b>
          </div>
          <Card > 
          <Button fullWidth style={{position:'relative',height:'50px'}}aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <div style={{textAlign:'left',position:'absolute',fontSize:'18px',left:'15px',display:'inline'}}><b>Gameweek Winners</b>
                </div>
                <div style={{textAlign:'right',position:'absolute',right:'30px'}}>
                <i class="fa fa-angle-down" style={{fontSize:'15px',color:'red'}}></i>
                </div>
          </Button>
            <div className="col-md-6 col-sm-6">   
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Menu1</MenuItem>
                <MenuItem onClick={handleClose}>Menu2</MenuItem>
                <MenuItem onClick={handleClose}>Menu3</MenuItem>
              </Menu>
              </div>
          </Card>
          <div className="premierfixtures">  
          &nbsp;
          </div>  
          <Card >                   
            <CardActionArea>                           
                <div className="col-md-12 col-sm-12">                                                     
                </div>                   
                  <Fantasywinnerscomponent/>                    
                                  
            </CardActionArea>
          </Card>
        </div>         
        <div className="col-md-6 col-sm-6" style={{paddingTop:'5px'}}>
          <div style={{fontSize:'24px',color:'#585858',fontFamily:'Montserrat-Bold',textAlign:'left',fontFamily:'Montserrat-Bold'}}>
              <b>Monthly Winners</b>
          </div>          
          <Card >
          <Button fullWidth style={{position:'relative',height:'50px'}}aria-controls="simple-menu1" aria-haspopup="true" onClick={handleClick}>
                <div style={{textAlign:'left',fontSize:'18px',position:'absolute',left:'15px',display:'inline'}}><b>Monthly Winners</b>
                </div>
                <div style={{textAlign:'right',position:'absolute',right:'30px'}}>
                <i class="fa fa-angle-down" style={{fontSize:'18px',color:'red'}}></i>
                </div>
          </Button>
            <div className="col-md-6 col-sm-6">
                <Menu
                    id="simple-menu1"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                <MenuItem onClick={handleClose}>Menu1-1</MenuItem>
                <MenuItem onClick={handleClose}>Menu2-1</MenuItem>
                <MenuItem onClick={handleClose}>Menu3-1</MenuItem>
              </Menu>
              </div> 
          </Card>           
          <div className="premierfixtures">  
          &nbsp;
          </div>  
          <Card >
            <div className="col-md-6 col-sm-6">              
              </div>              
            <div className="col-md-4 col-xs-4">         
            </div>           
            <CardActionArea>               
                <div className="col-md-12 col-sm-12">                                                     
                </div>                   
                  <Fantasywinnerscomponent/>                    
                                   
            </CardActionArea>
          </Card>
        </div>
        <div>
          &nbsp;
        </div>

        <p style={{opacity:'1',color:'#818181',fontFamily:"Montserrat-Regular",fontSize:'18px',textAlign:'left'}}>
           Name: * To be eligible to win a weekly prize, you must have joined the game before the start of the season or a minimum of two clear Gameweeks before the one in which you are top of the weekly leaderboard. Players who have played a chip (including Bench Bo@1X.png

        </p>
      </div>
      
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
            <Socialbar/>
      </div>
    </div>
  );
}
