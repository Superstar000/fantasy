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
import BG from './../mc-scorebox-sml.jpg';
import BG1 from './../GxMg0SEd.webp';



const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
    // paddingBottom: "30px"

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
    padding: '10px 15px',
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

export default function FantasyHome(props) {
  const classNamees = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classNamees.container} id="buy-space">
      <div className="col-md-12 col-sm-12" style={{ padding: '70px 10% 20px'}}> 
      <h1 style={{color:"white",textAlign: 'left',fontFamily:'fantasy'}}>COMMUNITIES</h1><div>&nbsp;</div> 
      <Card style={{overflow: "initial"}}>
          <CardContent style={{padding:'0px',margin:'0px'}}>
            <Typography gutterBottom variant="h4" component="h3" className='backgrounda' style={{color:'white'}}>
              <b>COMMUNITIES</b><div>&nbsp;</div>  
              <Typography gutterBottom variant="h5" component="h4" style={{color:'white'}}>
              <b>Through participation and opportunity,<br/>
                 we inspire and connect with local and<br/>
                 global communities.</b>
              </Typography>     
            </Typography>
          </CardContent>
      </Card> 
      
    </div>
      
      <div className="col-md-12 col-sm-12" style={{ padding: '0 10%'}}>        
      <div className="col-md-3 col-sm-3" style={{padding:'0px',margin:'0px'}}>
          <Card><CardContent style={{backgroundColor:'#fe2881'}}><span className="clubcom">CLUB COMMUNITIES</span></CardContent></Card>
          <Card>
             <CardContent style={{padding:'0px',margin:'0px'}}>
              <div className='w3-row'>
                <div className=" w3-container w3-half w3-left">
                  <ul className="w3-ul ">
                    <li><img width="40px" height="40px" src="/img/clubs/Arsenal.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">ASL</a> </li>
                  </ul>
                </div>
                <div className="w3-container w3-half w3-right">
                  <ul className="w3-ul ">  
                    <li><a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-flickr"></a> </li>
                    </ul>
                 </div>
              </div>
            </CardContent>
         </Card>
          <Card>
             <CardContent style={{padding:'0px',margin:'0px'}}>
              <div className='w3-row '>
                <div className=" w3-container w3-half w3-left">
                  <ul className="w3-ul ">
                  <li><img width="40px" height="40px" src="/img/clubs/AstonVilla.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">AVL</a></li>
                  </ul>
                </div>
                <div className="w3-container w3-half w3-right">
                  <ul className="w3-ul ">  
                    <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-flickr"></a> </li>
                    </ul>
                 </div>
              </div>
              </CardContent>
              </Card>
          <Card>
             <CardContent style={{padding:'0px',margin:'0px'}}>    
              <div className='w3-row '>
                <div className=" w3-container w3-half w3-left">
                  <ul className="w3-ul ">
                  <li><img width="40px" height="40px" src="/img/clubs/BrightonAndHoveAlbion.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">BHA</a></li>
                  </ul>
                </div>
                <div className="w3-container w3-half w3-right">
                  <ul className="w3-ul ">  
                    <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-flickr"></a> </li>
                    </ul>
                 </div>
              </div>
              </CardContent>
              </Card>
          <Card>
             <CardContent style={{padding:'0px',margin:'0px'}}>    
              <div className='w3-row '>
                <div className=" w3-container w3-half w3-left">
                  <ul className="w3-ul ">
                  <li><img width="40px" height="40px" src="/img/clubs/Burnley.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">BUR</a> </li>
                  </ul>
                </div>
                <div className="w3-container w3-half w3-right">
                  <ul className="w3-ul ">  
                    <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-flickr"></a> </li>
                    </ul>
                 </div>
              </div>
              </CardContent>
              </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>     
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/Chelsea.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">CHE</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/CrystalPalace.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">CRY</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/Everton.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">EVE</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/Fulham.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">FUL</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/LeedsUnited.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">LEE</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/LeicesterCity.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">LEI</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/Liverpool.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">LIV</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/ManchesterCity.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">MCI</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/ManchesterUnited.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">MUN</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/NewcastleUnited.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">NEW</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/SheffieldUnited.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">SHU</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/Southampton.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">SOU</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/TottenhamHotspur.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">TOT</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/WestBromwichAlbion.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">WBA</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
          <CardContent style={{padding:'0px',margin:'0px'}}>  
          <div className='w3-row '>
            <div className=" w3-container w3-half w3-left">
              <ul className="w3-ul ">
              <li><img width="40px" height="40px" src="/img/clubs/WestHamUnited.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">WHU</a> </li>
              </ul>
            </div>
            <div className="w3-container w3-half w3-right">
              <ul className="w3-ul ">  
                <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-linkedin"></a>
                  <a href="#" className="fa fa-flickr"></a> </li>
                </ul>
              </div>
          </div>
          </CardContent>
          </Card>
          <Card>
             <CardContent style={{padding:'0px',margin:'0px'}}> 
              <div className='w3-row '>
                <div className=" w3-container w3-half w3-left">
                  <ul className="w3-ul ">
                    <li><img width="40px" height="40px" src="/img/clubs/WolverhamptonWanderers.png"></img><div style={{display:'inline-block'}}>&emsp;</div><a style={{fontSize:'20px'}}href="#">WOL</a> </li>
                  </ul>
                </div>
                <div className="w3-container w3-half w3-right">
                  <ul className="w3-ul ">  
                    <li style={{paddingTop:"15px"}}><a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-flickr"></a> </li>
                    </ul>
                 </div>
              </div>
          
             </CardContent>
         </Card>
        </div>
      <div className="col-md-9 col-sm-9" style={{paddingLeft:'20px',margin:'0px'}}>
        <Card><CardContent style={{backgroundColor:'#fe2881'}}><span className="clubcom" >NEWS</span></CardContent></Card>
        <div className="row card" style={{paddingLeft:'0px',margin:'0px'}}>
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body">
                <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                <div><font color="red">communities</font></div> 
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body">
              <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                  <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                  <div><font color="red">communities</font></div> 
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="card">
              <div className="card-body">
                 <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                 <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                 <div><font color="red">communities</font></div> 
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
        <Card><CardContent style={{backgroundColor:'#fe2881'}}><span className="clubcom" >LATEST FPL VIDEO</span></CardContent></Card>
        <div className="row card" style={{padding:'0px',margin:'0px'}}>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                    <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                      <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                      <div><font color="red">communities</font></div> 
                   </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                       <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                        <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                        <div><font color="red">communities</font></div>                    
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                    <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                       <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                       <div><font color="red">communities</font></div>                   
                    </div>
                  </div>
                </div>
              </div> 
        <div className="row card" style={{padding:'0px',margin:'0px'}}>
                   <div className="col-sm-4 col-md-4">
                     <div className="card">
                       <div className="card-body">
                       <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                         <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                         <div><font color="red">communities</font></div>                         
                       </div>
                     </div>
                   </div>
                   <div className="col-sm-4 col-md-4">
                     <div className="card">
                       <div className="card-body">
                       <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                           <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                           <div><font color="red">communities</font></div>                         
                       </div>
                     </div>
                   </div>
                   <div className="col-sm-4 col-md-4">
                     <div className="card">
                       <div className="card-body">
                       <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                          <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                         <div><font color="red">communities</font></div>                          
                       </div>
                     </div>
                    </div>
               </div> 
        <div>&nbsp;</div>
        <Card style={{backgroundColor:'#00ff86'}}>                     
            <CardContent >
              <div className="col-md-4 col-sm-4">
                 <a href='#'><img src="/img/background/PLKICKER.png" width="100%" height="100%"/></a>
               </div>
              <div className="col-md-4 col-sm-4" style={{padding:'3%'}}>
                <Typography gutterBottom variant="h4" component="h2" style={{color:'black',textAlign: "center"}}>
                <b>PRMIER LEAGUE KICKER</b>
                </Typography>
                <Typography variant="h6" color="textprimary" component="h4" style={{ textAlign: "center"}}>             
                  <b>Find out more about our flagship community programme which uses the power of football and sport to inspire young people in some of the most high-need areas in England and Wales.</b>
                  <div>&nbsp;</div>
                     <Button variant="contained" color="secondary" >
                       <b><a href='#' style={{textAlign:"left", color:'white'}}>Find out moreExternal=></a></b>
                     </Button>
                </Typography>
              </div>                
              </CardContent>          
        </Card>
        <div>&nbsp;</div>
        <Card><CardContent style={{backgroundColor:'#fe2881'}}><span className="clubcom" >COMMUNITIES VIDEO</span></CardContent></Card>
        <div className="row card" style={{padding:'0px',margin:'0px'}}>
                  <div className="col-sm-4 col-md-4">
                    <div className="card">
                      <div className="card-body">
                      <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                        <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                        <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                     </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="card">
                      <div className="card-body">
                         <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                          <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                          <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="card">
                      <div className="card-body">
                      <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                         <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                         <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                      </div>
                    </div>
                  </div>
            </div> 
        <div className="row card" style={{padding:'0px',margin:'0px'}}>
                 <div className="col-sm-4 col-md-4">
                   <div className="card">
                     <div className="card-body">
                     <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                       <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                       <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-4 col-md-4">
                   <div className="card">
                     <div className="card-body">
                     <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                         <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                         <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-4 col-md-4">
                   <div className="card">
                     <div className="card-body">
                     <a href="#"><img className="zoom " width="210px" height="170px" src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" title="Contemplative Reptile"/></a><div>&nbsp;</div>
                        <a className="card-title" href="/"><h5>Coronavirus: Latest on how clubs sup</h5></a> 
                        <div style={{textAlign:'left'}}>
                          <span className="label label-success radius7" style={{marginRight:'10px'}}>CC</span>
                          <span className="label label-danger radius7">AD</span>          
                        </div>
                     </div>
                   </div>
                  </div>
             </div> 
         <div>&nbsp;</div>
          <Card style={{overflow: "initial"}}>
                <CardContent style={{padding:'0px',margin:'0px'}}>
                  <Typography  variant="h2"  className='backgroundb' style={{color:'white'}}>
                    <b>SCHOOLS</b><br/> 
                  </Typography>                                 
                  <Button variant="contained" color="secondary" >
                    <b><a href='#' style={{textAlign:"left", color:'white'}}>Find out more=></a></b>
                  </Button>
                </CardContent>
        </Card>
        <div>&nbsp;</div> 
         <Card style={{overflow: "initial"}}>
                 <CardContent style={{padding:'0px',margin:'0px'}}>
                    <Typography  variant="h2"  className='backgroundc' style={{color:'white'}}>
                     <b>FICILITIES</b><br/>
                    </Typography>                                  
                    <Button variant="contained" color="secondary" >
                    <b><a href='#' style={{textAlign:"left", color:'white'}}>Find out more=></a></b>
                    </Button>
                  </CardContent>
             </Card> 
         <div>&nbsp;</div>
          <Card style={{overflow: "initial"}}>
                 <CardContent style={{padding:'0px',margin:'0px'}}>
                   <Typography  variant="h2"  className='backgroundd' style={{color:'white'}}>
                     <b>COMMUNITIES</b><br/>
                   </Typography>                                  
                   <Button variant="contained" color="secondary" >
                   <b><a href='#' style={{textAlign:"left", color:'white'}}>Find out more=></a></b>
                  </Button>
                 </CardContent>
             </Card> 
        <div>&nbsp;</div>  
      </div>
    </div>                                              
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5% 10%' }}>  
      <Socialbar/>
      </div>
     </div>
    
  );
}
