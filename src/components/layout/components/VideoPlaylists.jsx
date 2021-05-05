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

import BG from './../mc-scorebox-sml.jpg';

var rootStyle = {
  padding:'20px',
  width: "150px",
  backgroundImage: `url(${BG})`,
  height: "150px",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin:'25px 10px'
};


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
  }

}));

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

const Button = withStyles((theme) => ({
  root: {
     fontSize: '1rem'
   
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

export default function PremierClubs(props) {
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

      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'5%'}}>Video</h2>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '0 5%' }}>  
          <Card >            
            <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"center",color:"white"}}><b>FPL VIDEOS</b></font>
              </Button>
            </ThemeProvider>    
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
              </div>
            </CardActionArea>
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
              </div>
            </CardActionArea>
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>FPL SHOW</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'center'}}>GOAL OF THE DAY</div>
                  <div style={{textAlign:'center'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>50 VIDEOS</span>
                  </div>
                </div>
              </div>
            </CardActionArea>
          </Card>
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
            <Socialbar/>
      </div>
                
    </div>
  );
}
