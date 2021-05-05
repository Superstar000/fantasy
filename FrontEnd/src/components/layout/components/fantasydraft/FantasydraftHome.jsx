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

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classes.container} id="buy-space">
     
      <h1 className={classes.title}></h1>

      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'100px'}}>Fantasy</h2>
      <div className="row" style={{ padding: '0 100px' }}>        
        <div className="col-md-9 col-sm-9">
          <Card >
            <CardActionArea>
              <img width="100%" height="500px"
                 src="/Jean-Philippe-Mateta-Crystal-Palace-home.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.reffirst}>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "left"}}>
                Find out about the transfer system in the Premier League
                <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  Premier League clubs are permitted to conduct the purchase and sale of players during the winter and summer transfer windows.
                  Windows were introduced as part of a compromise agreement with the European Commission about how the whole transfer system worked and how it could best preserve contractual stability for both the player and the club while allowing movement at prescribed times during the year – the summer and winter transfer windows in effect.
                  The alternative was to bring football in line with most other industries where contracts were not enforceable or liable for appropriate compensation, i.e. notice periods being served and players moving at will.
                  The football authorities across Europe felt this would fatally undermine the footballing economy and remove the incentive for clubs to invest in developing players.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>
        <div className="col-md-3 col-sm-3">
          <Card className={classes.root}>         
            <CardActionArea>
              <Button fullWidth variant="contained" color="secondary" style={{textAlign:'left'}}>
                <font style={{textAlign:"left"}}><b>FPL STATS</b></font>
              </Button>
              <CardContent>               
                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "left", display: "inline-block" }}>
                  <Box> <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2021</b> January transfers</i>
                  </Box>
                  <Box>  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2020</b> Summer transfers</i>
                  </Box>
                  <Box> <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2020</b> January transfers</i>
                  </Box>
                  <Box>  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2019</b> Summer transfers</i>
                  </Box>
                  <Box> <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2019</b> January transfers</i>
                  </Box>
                  <Box>  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2018</b> Summer transfers</i>
                  </Box>
                  <Box>  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> <b>2018</b> January transfers</i>              
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant="outlined" color="primary">
                How deals get done
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>         
            <CardActionArea>
              <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>LATEST</b></font>
              </Button>
              </ThemeProvider>             
              <CardContent>  
                <div>
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div>  <h5>Transfer Deadline Day 2021 <br/>
                               - all the deals</h5>
                  </div>
                  <div>  <font color="red">Transfers</font> 
                  </div>
                  <div> 
                    <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> Saints seal Minamino loan <br/> deal External Link</i>
                  </div>   
                  <div>
                  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> King signs for Everton<br/>  External Link</i>
                  </div>   
                </Typography>
             
              </CardContent>
              <CardContent>  
                <div>
                   <img width="210px" height="170px" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <Typography variant="body2" color="textSecondary" component="h6" style={{ textAlign: "justify", display: "inline-block" }}>                
                  <div>  <h5>Transfer Deadline Day 2021 <br/>
                               - all the deals</h5>
                  </div>
                  <div>  <font color="red">Transfers</font> 
                  </div>
                  <div> 
                    <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> Saints seal Minamino loan <br/> deal External Link</i>
                  </div>   
                  <div>
                  <CheckIcon color="secondary" /><i style={{ verticalAlign: "super" }}> King signs for Everton<br/>  External Link</i>
                  </div>   
                </Typography>
             
              </CardContent>
            </CardActionArea>
           </Card>
           
          
        </div>
      </div>



    </div>
  );
}
