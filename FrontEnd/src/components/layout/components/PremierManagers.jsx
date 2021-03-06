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

import Premiermanagerscomponent from './subcomponent/Premiermanagerscomponent';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';


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

export default function FantasyHome(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  const [age, setAge] = React.useState('');

  const handleChangeage = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div className={classes.container} id="buy-space">
     
      <h2 className={classes.title}></h2>

      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'5%'}}>Managers</h2>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '0 5%' }}>  
          <Card >
            <div className="col-md-2 col-sm-12">
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Filter by Season</InputLabel>                
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChangeage}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>                
                 </FormControl>
                 </div>
              <div className="col-md-1 cp-sm-12">
                 <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Filter by Clubs</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeage}
                  >             
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>                
                </FormControl>
              </div>
            <div className="col-md-6 col-xs-4">
          


            </div>
            <div className="col-md-3 col-sm-12">
              <Paper component="form" className={classes.root}>   
                 <InputBase
                   className={classes.input}
                   placeholder="Search"
                   inputProps={{ 'aria-label': 'Search' }}
                 />
                 <IconButton type="submit" className={classes.iconButton} aria-label="search">
                   <SearchIcon />
                 </IconButton>
              </Paper>
            </div>
            <CardActionArea>
                <div className="row premierfixtures">  
                &nbsp;              
                </div>
                <div className="col-md-12 col-xs-12">
                  <div className="col-md-2 col-xs-2" style={{fontSize:'14px'}}>                    
                      <b>Managers</b>
                  </div>
                  <div className="col-md-8 col-xs-8" style={{fontSize:'16px'}}>
                     <b>Club</b>
                  </div>
                  <div className="col-md-2 col-xs-2" style={{fontSize:'14px'}}>
                      <b>Nationality</b>
                  </div>                              
                </div>                   
                  <Premiermanagerscomponent/>                     
                  <Premiermanagerscomponent/>                     
                  <Premiermanagerscomponent/>                     
                  <Premiermanagerscomponent/>                     
            </CardActionArea>
          </Card>
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
            <Socialbar/>
      </div>
    </div>
  );
}
