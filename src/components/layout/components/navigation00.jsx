import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import Flag from 'react-flagkit';
import { IconButton, FormControl, MenuItem } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { connect } from "react-redux";
import { TranslateAction } from "../../../actions/translateAction";
import { withStyles } from '@material-ui/core/styles';
import Muiselect from '@material-ui/core/Select';
import Submenubar from './Submenu';
import Icon1 from './../t3.png';
import Icon2 from './../t7.png';
import Icon3 from './../t36.png';
import Icon4 from './../t90.png';
import Icon5 from './../t8.png';
import Icon6 from './../t31.png';
import Icon7 from './../t11.png';
import Icon8 from './../t54.png';
import Icon9 from './../t2.png';
import Icon10 from './../t13.png';
import Icon11 from './../t14.png';
import Icon12 from './../t1.png';
import Icon13 from './../t4.png';
import Icon14 from './../t43.png';
import Icon15 from './../t1.png';
import Icon16 from './../t4.png';
import Icon17 from './../t49.png';
import Icon18 from './../t20.png';
import Icon19 from './../t6.png';
import Icon20 from './../t35.png';
import Icon21 from './../t21.png';
import Icon22 from './../t39.png';

const Select = withStyles({
  icon: {
    display: 'none'
  },
  select: {
    paddingRight: '12px!important',
    paddingLeft: '12px'
  }
})(Muiselect);
const icon = {
  
};
const innertitle={
  marginRight:"20px"
}


export class Navigation extends Component {
   
  state = {
    countflag: 4,
    fantasystate:0
  }
  
  onMenuBar = (e)=>{
      //e.preventDefault();
      this.setState({
        fantasystate: false
      })
  }
  
  ChangeLanguage = (flag) => dispatch => {
    this.props.TranslateAction(flag);
  }

  handleChange = (event) => {
    console.log("handle: " + event.target.value)
    this.setState({
      countflag: event.target.value
    })
  };   
  render() {
    return (
      <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" >
        <div className="container" >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <div style={{ display: 'flex', textAlign:'center' }}>
              <a href="/" className="d-none">
                <img src="/logo.png" alt="eyelogo" style={{ width: "50px"}} />
              </a>
              <div className="web">
                <Box display={{ md: 'none', xs: 'none', sm: 'none', lg: 'block' }}>               
                <a href="/">
                <img style={icon} className="imghover" src={Icon1}/>
                </a>  
                <a>
                <img style={icon} className="imghover" src={Icon2}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon3}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon4}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon5}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon6}/>
                </a>   
                <a>
                <img style={icon} className="imghover"src={Icon7}/>
                </a>
                <a>
                <img style={icon}className="imghover" src={Icon8}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon9}/>
                </a> 
                <a>
                <img style={icon} className="imghover"src={Icon10}/>
                </a>
                <a>
                <img style={icon}className="imghover" src={Icon11}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon13}/>
                </a>
                <a>
                <img style={icon} className="imghover" src={Icon14}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon15}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon16}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon17}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon18}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon19}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon20}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon21}/>
                </a>
                <a>
                <img style={icon} className="imghover"src={Icon22}/>
                </a>
                </Box>
              </div>

            </div>
             <div className="mobile">
              <a href="/" className="d-md-block">
                <img src="/logo.png" alt="eyelogo" style={{ width: "60px", marginRight: "70px" }} />
              </a>
              <Box display={{ lg: 'block', md: 'none' }} style={{ paddingRight: '10px' }}>
                <FormControl>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.countflag}>
                    <MenuItem value={1}> <a href="/">
                <img style={icon} className="imghover1" src={Icon1}/>
                </a> </MenuItem>
                    <MenuItem value={2}>
                    <a>
                <img style={icon} className="imghover1" src={Icon2}/>
                </a>
                    </MenuItem>
                    <MenuItem value={3}><a>
                <img style={icon} className="imghover1"src={Icon3}/>
                </a></MenuItem>
                    <MenuItem value={4}> <a>
                <img style={icon} className="imghover1"src={Icon4}/>
                </a></MenuItem>
                    <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon5}/>
                </a></MenuItem>
                <MenuItem value={5}>  <a>
                <img style={icon} className="imghover1"src={Icon6}/>
                </a>   </MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon7}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon8}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon9}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon10}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon11}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon12}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon13}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon14}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon15}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon16}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon17}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon18}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon19}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon20}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon21}/>
                </a></MenuItem>
                <MenuItem value={5}> <a>
                <img style={icon} className="imghover1"src={Icon22}/>
                </a></MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>       
        </div>
      </nav>
      <Box  className="navigation_respon1 fixed-top">
      <div style={{height:'70px'}}>&nbsp;</div>
      <nav className="navbar sticky-top" style={{margin:'0px',background: 'slateblue',position:'fixed',zIndex:'1'}}>
      <ul className="navbar-nav" style={{paddingLeft:'10%',paddingRight:'10%'}}>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{marginTop:'6px'}} id="navbardrop" data-toggle="dropdown">
            Premier League
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',width:'300px',lineHeight:'20px'}} >
            <div className="col-md-6">
            <a className="dropdown-item" href="#/premierhome"style={{padding:'0px'}} >Home</a>
            <a className="dropdown-item" href="#/premierfixtures"style={{padding:'0px'}} >Fixtures</a>
            <a className="dropdown-item" href="#/premierstatus"style={{padding:'0px'}}>Status</a>
            <a className="dropdown-item" href="#/premierclubs"style={{padding:'0px'}}>Clubs</a>
            <a className="dropdown-item" href="#/premierfixtures"style={{padding:'0px'}}>Premier Fixtures</a>
            <a className="dropdown-item" href="#/premierNews"style={{padding:'0px'}}>News</a>
            <a className="dropdown-item" href="#/premiersocial"style={{padding:'0px'}}>Social</a>
            <a className="dropdown-item" href="#/premieryouth"style={{padding:'0px'}}>Youth</a>
          </div>
          <div className="col-md-6">
            <a className="dropdown-item" href="#/premierplayers"style={{padding:'0px'}}>Players</a>
            <a className="dropdown-item" href="#/premierreferees"style={{padding:'0px'}}>Referees</a>
            <a className="dropdown-item" href="#/premierresults"style={{padding:'0px'}}>Results</a>
            <a className="dropdown-item" href="#/premiertables"style={{padding:'0px'}}>Tables</a>
            <a className="dropdown-item" href="#/premierbroadcast"style={{padding:'0px'}}>Broadcast</a>
            <a className="dropdown-item" href="#/premiersafeguarding"style={{padding:'0px'}}>Safeguarding</a>
            <a className="dropdown-item" href="#/premiertickets"style={{padding:'0px'}}>Tickets</a>

            </div>
          </div>
        </li>       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
            Fantasy
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
            <a className="dropdown-item" href="#/fantasy">Fantasy</a>
            <a className="dropdown-item" href="#/fantasydraft">FantasyDraft</a>
          </div>     
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
            Video
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
            <a className="dropdown-item" href="#/videodashboard">Dashboard</a>
            <a className="dropdown-item" href="#/videofantasy">Fantasy</a>
            <a className="dropdown-item" href="#/videoall">All videos</a>
            <a className="dropdown-item" href="#/videoplaylists">Playlists</a>
          </div>     
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
          Communicates
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
            <a className="dropdown-item" href="#/communities">latest</a>
            <a className="dropdown-item" href="#/communities/strategy">Strategy</a>
            <a className="dropdown-item" href="#/communities/programmes">Programmes</a>
            <a className="dropdown-item" href="#/communities/facilities">Facilities</a>
            <a className="dropdown-item" href="#/communities/plcharifund">PL charitable Fund</a>
          </div>     
        </li>             
        <li  style={{marginTop:'6px'}}  className="nav-item">
          <a className="" href="#">More</a>
        </li>
        <li  style={{marginTop:'6px'}}  className="nav-item" >
          <div>&nbsp;</div>
        </li>  
        <li  style={{marginTop:'6px'}}  className="nav-item" >
          <a className="" href="#">No Room For Racism</a>
        </li>   
        <li  style={{marginTop:'6px'}}  className="nav-item">
          <a className="" href="#/login">Sign in</a>
        </li>   
      </ul>
      </nav>
      </Box>
      
      <Box className="navigation_respon2">
      <div style={{height:'50px'}}>&nbsp;</div>
      <nav className="navbar sticky-top" style={{margin:'0px',background: 'slateblue',height:'auto',position:'fixed',zIndex:'1'}}>
      <ul className="navbar-nav" style={{paddingLeft:'10%',paddingRight:'10%'}}>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" style={{marginTop:'6px'}} id="navbardrop" data-toggle="dropdown">
            Premier League
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',width:'300px',lineHeight:'20px'}} >
            <div className="col-md-6">
            <a className="dropdown-item" href="#/premierhome"style={{padding:'0px'}} >Home</a>
            <a className="dropdown-item" href="#/premierfixtures"style={{padding:'0px'}} >Fixtures</a>
            <a className="dropdown-item" href="#/premierstatus"style={{padding:'0px'}}>Status</a>
            <a className="dropdown-item" href="#/premierclubs"style={{padding:'0px'}}>Clubs</a>
            <a className="dropdown-item" href="#/premierfixtures"style={{padding:'0px'}}>Premier Fixtures</a>
            <a className="dropdown-item" href="#/premierNews"style={{padding:'0px'}}>News</a>
            <a className="dropdown-item" href="#/premiersocial"style={{padding:'0px'}}>Social</a>
            <a className="dropdown-item" href="#/premieryouth"style={{padding:'0px'}}>Youth</a>
          </div>
          <div className="col-md-6">
            <a className="dropdown-item" href="#/premierplayers"style={{padding:'0px'}}>Players</a>
            <a className="dropdown-item" href="#/premierreferees"style={{padding:'0px'}}>Referees</a>
            <a className="dropdown-item" href="#/premierresults"style={{padding:'0px'}}>Results</a>
            <a className="dropdown-item" href="#/premiertables"style={{padding:'0px'}}>Tables</a>
            <a className="dropdown-item" href="#/premierbroadcast"style={{padding:'0px'}}>Broadcast</a>
            <a className="dropdown-item" href="#/premiersafeguarding"style={{padding:'0px'}}>Safeguarding</a>
            <a className="dropdown-item" href="#/premiertickets"style={{padding:'0px'}}>Tickets</a>

            </div>
          </div>
          </li>        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
              Fantasy
            </a>
            <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
              <a className="dropdown-item" href="#">Fantasy</a>
              <a className="dropdown-item" href="#">FantasyDraft</a>
            </div>     
           </li> 
           
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
            Video
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
            <a className="dropdown-item" href="#/videodashboard">Dashboard</a>
            <a className="dropdown-item" href="#/videofantasy">Fantasy</a>
            <a className="dropdown-item" href="#/videoall">All videos</a>
            <a className="dropdown-item" href="#/videoplaylists">Playlists</a>
          </div>     
          </li> 
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  style={{marginTop:'6px'}} href="#" id="navbardrop" data-toggle="dropdown">
            Communicates
          </a>
          <div className="dropdown-menu" style={{background:'#5d4cc7',lineHeight:'20px'}}>
            <a className="dropdown-item" href="#/communities">latest</a>
            <a className="dropdown-item" href="#/communities/comstrategy">Strategy</a>
            <a className="dropdown-item" href="#/communities/programmes">Programmes</a>
            <a className="dropdown-item" href="#/communities/facilities">Facilities</a>
            <a className="dropdown-item" href="#/communities/plcharifund">PL charitable Fund</a>
          </div>     
          </li> 
          <li  style={{marginTop:'6px'}}  className="nav-item">
             <a className="" href="#">More</a>
          </li>
          <li  style={{marginTop:'6px'}}  className="nav-item" >
             <div>&nbsp;</div>
          </li>  
          <li   className="nav-item" >
            <a className="" href="#">No Room For Racism</a>
          </li>   
          <li   className="nav-item">
            <a className="" href="#">Sign in</a>
          </li>   
          </ul>
        </nav>
      {/* </nav> */}
      </Box>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  translator: state.translator,
});

export default connect(
  mapStateToProps, { TranslateAction }
)(withRouter(Navigation));
