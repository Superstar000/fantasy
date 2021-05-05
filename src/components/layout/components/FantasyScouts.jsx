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
    primary: purple,
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

   

      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'5%',margin:'0px'}}>Fantasy Scouts</h2>
      <div className="col-md-12 col-sm-12" style={{ padding: '0 5%',margin:'0px' }}>        
        <div className="col-md-9 col-sm-9" style={{padding:'3px',margin:'0px'}}>
          <Card style={{padding:'0px',margin:'0px'}}>
            <CardActionArea style={{padding:'0px',margin:'0px'}}>              
              <CardContent style={{padding:'0px',margin:'0px'}}>
              <div row="row" style={{paddng:'0px'}}>
                <div className="col-md-4 col-sm-4 paddingnone" style={{padding:'0px'}}>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                title="Contemplative Reptile"
                />
                </div>
                <div className="col-md-8 col-sm-8">
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "left"}}>
                Find out about the transfer system in the Premier League
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  Premier League clubs are permitted to conduct the purchase and sale of players during the winter and summer transfer windows.
                </Typography>
                </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
          <div style={{margin:'10px'}}> </div>
          <Card className={classes.root}>         
            <CardActionArea>
              <Button fullWidth variant="contained" color="secondary" style={{textAlign:'left'}}>
                <font style={{textAlign:"left"}}><b>LATEST FPL STATS</b></font>
              </Button>
              <div className="col-md-4 col-xs-4">
                <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
                <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
            </CardActionArea>          
          </Card>
          <div style={{margin:'10px'}}> </div>
          <Card style={{padding:'0px',margin:'0px'}}>
            <CardActionArea style={{padding:'0px',margin:'0px'}}>              
              <CardContent style={{padding:'0px',margin:'0px'}}>
              <div row="row" style={{paddng:'0px'}}>
                <div className="col-md-4 col-sm-4 paddingnone" style={{padding:'0px'}}>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                title="Contemplative Reptile"
                />
                </div>
                <div className="col-md-8 col-sm-8">
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "left"}}>
                Find out about the transfer system in the Premier League
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  Premier League clubs are permitted to conduct the purchase and sale of players during the winter and summer transfer windows.
                </Typography>
                </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>

          <div style={{margin:'10px'}}></div>

          <Card className={classes.root}>         
            <CardActionArea>
              <Button fullWidth variant="contained" color="secondary" style={{textAlign:'left'}}>
                <font style={{textAlign:"left"}}><b>LATEST FPL STATS</b></font>
              </Button>
              <div className="col-md-4 col-xs-4">
                <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
                <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
              <div>
                <img width="100%" height="100%"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                 title="Contemplative Reptile"
                /> 
                </div>
                <div className="fantasyscouts">
                  TRANSFER DEADLINE DAY 2021-ALL THE DEALS
                </div>
                <div className="fantasyscouts1">
                  Transfers
                  <hr/>
                </div>
                <div className="fantasyscouts2">
                  <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
                <div className="fantasyscouts2">
                   <CheckIcon color="secondary" /> lorem ipsum dol sit ami Lorem
                </div>
              </div>
            </CardActionArea>          
          </Card>
          <div style={{margin:'10px'}}></div>         
        </div>
        <div className="col-md-3 col-sm-12" style={{padding:'0px'}}>          
          <Card className={classes.root}>         
            <CardActionArea>
              <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>FPL LATEST</b></font>
              </Button>
              </ThemeProvider>             
              <CardContent>  
                <div>
                  <b>Tweets</b> By @Offical FPL
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div> 
                    Fantasy Premier League @OfficalFPL
                  </div>
                  <div>  <font color="red">Most attacking returns since</font> 
                  <br/>
                  Lingard-12
                  <br/>
                  Kane,Fernandes-9
                  </div>
                  <div> 
                  Iheadkf gkudan 
                  </div>   
                </Typography>
                  
              </CardContent>
              <CardContent>  
                <div>
                  <b>Tweets</b> By @Offical FPL
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div> 
                    Fantasy Premier League @OfficalFPL
                  </div>
                  <div>  <font color="red">Most attacking returns since</font> 
                  <br/>
                  Lingard-12
                  <br/>
                  Kane,Fernandes-9
                  </div>
                  <div> 
                  Iheadkf gkudan 
                  </div>   
                </Typography>
                  
              </CardContent>
              <CardContent>  
                <div>
                  <b>Tweets</b> By @Offical FPL
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div> 
                    Fantasy Premier League @OfficalFPL
                  </div>
                  <div>  <font color="red">Most attacking returns since</font> 
                  <br/>
                  Lingard-12
                  <br/>
                  Kane,Fernandes-9
                  </div>
                  <div> 
                  Iheadkf gkudan 
                  </div>   
                </Typography>
                  
              </CardContent>
              <CardContent>  
                <div>
                  <b>Tweets</b> By @Offical FPL
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div> 
                    Fantasy Premier League @OfficalFPL
                  </div>
                  <div>  <font color="red">Most attacking returns since</font> 
                  <br/>
                  Lingard-12
                  <br/>
                  Kane,Fernandes-9
                  </div>
                  <div> 
                  Iheadkf gkudan 
                  </div>   
                </Typography>
                  
              </CardContent>
              <CardContent>  
                <div>
                  <b>Tweets</b> By @Offical FPL
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
              </CardContent>
              
            </CardActionArea>
           </Card>
        </div>
      </div>

      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
      <Socialbar/>
      </div>

    </div>
  );
}
