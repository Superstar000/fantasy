import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import { connect } from "react-redux";
import Axios from "axios";

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
import BG1 from './../GxMg0SEd.webp';

var rootStyle = {
  padding:'0px',
  width: "100%",
  backgroundImage: `url(${BG1})`,
  height: "100%",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin:'0px'
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

export default function VideoDashboard(props) {
  const classes = useStyles();
  const history = useHistory();

  const [datavideo, setDatavideo] = useState([]); 
  const [dataId, setDataId] = useState(""); 
  // const [data, setData] = useState({name: 'name', familyName: 'family'});
  const [data, setData] = useState([]);
//  let [responseData, setResponseData] = React.useState('');
//  React.useEffect(() => {
//   setData('hello123')
//    console.log(data)
//  }, [data, setData])

//  useEffect(() => {
//    const fetchData = async () => {
//      const result = await Axios(
//        'http://127.0.01.1:3004/create',
//      );
//       console.log("--");
//       console.log(result);
 
//       // setData({name:'Marco',familyName: 'Shaw'});
//       setData(result.data);
//       //if (data) {
//       //  setData(result.data);
//      // }
//       console.log("aaa");
//       console.log(data.content);
//       console.log(data.content);

//     };
//       fetchData();
//  },[data]);
  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  useEffect(() => {
    async function fetchData() {
      // Call fetch as usual
      const res = await fetch(
        "http://127.0.01.1:3004/create"
      );

      // Pull out the data as usual
      const json = await res.json();     
      // Save the posts into state
      // (look at the Network tab to see why the path is like this)
      console.log(json.content);
      setData(json.content);
      console.log("a");
      console.log(data);
    }
    fetchData();
  },[]); // <-- we didn't pass a value. what do you think will happen?
 const onChange = (e) => {
//   setData('result.data');
console.log("ddd000");
console.log(e);
setDatavideo(e.content);
console.log(datavideo);
console.log("ll--");
  // console.log(data);
}      


   return (
    <div className={classes.container} id="buy-space">
      
      <h2 className={classes.title}></h2>
        
      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'5%'}}>
        {//data.map((item)=>{
             data.map(el => (
              <div key={el.id}>(cv{JSON.stringify(el).id}</div> 
              // {el.title}</li>this.state.data.portfolio[0].image
            ))
         //});
        }
        </h2>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
          <Card>             
          <CardContent style={{padding:'0px',margin:'0px'}}>                
                <picture >
                    <img src="/img/background/videodash.png"  width="100%" height="100%"/>
                </picture>        
                  <div style={{color:'white',textAlign:'justify',position:'absolute',top:'20%',fontWeight:'bold'}}>
                    
                  </div>                        
            </CardContent>              
          </Card>
          <div>&nbsp;</div>
          <Card >            
            <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" onClick={onChange}className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>MOST WATCHED</b></font>
              </Button>
            </ThemeProvider>    
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
              </div>
            </CardActionArea>              
          </Card>
          <div height="5px">&nbsp;</div>
          <Card>
          <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>POPULAR PLAYLISTS</b></font>
              </Button>
            </ThemeProvider>    
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
              </div>
            </CardActionArea>              
          </Card>
          <div height="5px">&nbsp;</div>
          <Card>
            <div style={rootStyle}>
            <CardActionArea>
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-5">
                     &nbsp;<br/><br/><br/>
                  <h3 className="linktag"> BEST OF MATCHWEEK 31 </h3>
                </div>  
                <div className="col-md-7">
                <div className="col-md-12"> 
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div> 
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                </div>                
                 
                <div className="col-md-12"> 
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div> 
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="130px"/>
                  <div className="videodashboard1">TRANSFER DEADLINE 2021 ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                </div>
              </div>
              </div>
            </CardActionArea>   
            </div>           
          </Card>
          <div height="5px">&nbsp;</div>
          <Card>
          <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>OLATEST ICONIC MOMENTS</b></font>
              </Button>
            </ThemeProvider>    
            <CardActionArea>           
              <div className="row" style={{margin:'0px'}}>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>        

                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
                  </div>
                </div>
                <div className="col-md-3 col-sm-12" style={{margin:'0px',padding:'3px'}}>
                  <img src={BG} width="100%" height="200px"/>
                  <div style={{color:'black',textAlign:'justify'}}>TRANSFER DEADLINE 2021-<br/> ALL THE DEALS</div>
                  <div style={{textAlign:'left'}}>
                  <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                  <span className="label label-danger radius7">AD</span>          
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
// const mapStateToProps = state => ({
//   video_dashboard: state.video_dashboard,
// });
// export default connect(
//   mapStateToProps,
//   { getVideoDashboard }
// )(withRouter(VideoDashboard));
