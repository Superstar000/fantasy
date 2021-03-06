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
import Typography from '@material-ui/core/Typography';
import Icon1 from './../../../img/clubs/Arsenal.png';
import Icon2 from './../../../img/clubs/AstonVilla.png';
import Icon3 from './../../../img/clubs/BrightonAndHoveAlbion.png';
import Icon4 from './../../../img/clubs/Burnley.png';
import Icon5 from './../../../img/clubs/Chelsea.png';
import Icon6 from './../../../img/clubs/CrystalPalace.png';
import Icon7 from './../../../img/clubs/Everton.png';
import Icon8 from './../../../img/clubs/Fulham.png';
import Icon9 from './../../../img/clubs/LeedsUnited.png';
import Icon10 from './../../../img/clubs/LeicesterCity.png';
import Icon11 from './../../../img/clubs/Liverpool.png';
import Icon12 from './../../../img/clubs/ManchesterCity.png';
import Icon13 from './../../../img/clubs/ManchesterUnited.png';
import Icon14 from './../../../img/clubs/NewcastleUnited.png';
import Icon15 from './../../../img/clubs/SheffieldUnited.png';
import Icon16 from './../../../img/clubs/Southampton.png';
import Icon17 from './../../../img/clubs/TottenhamHotspur.png';
import Icon18 from './../../../img/clubs/WestBromwichAlbion.png';
import Icon19 from './../../../img/clubs/WestHamUnited.png';
import Icon20 from './../../../img/clubs/WolverhamptonWanderers.png';
import Icon21 from './../../../img/clublogo.png';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, Form } from 'react-bootstrap';





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


export class Navigation extends Component {

  state = {
    countflag: 4,
    fantasystate: 0
  }

  onMenuBar = (e) => {
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
      <div >
        <nav className="navbar navbar-default fixedtop">
          <div className="">
            <div className="Clubs">

              <a style={{marginTop:'20px'}} href="/">
                <h6 >Clubs site</h6>
              </a>
              <a href="/">
                <img className="imghover" src={Icon1} />
              </a>
              <a>
                <img className="imghover" src={Icon2} />
              </a>
              <a>
                <img className="imghover" src={Icon3} />
              </a>
              <a>
                <img className="imghover" src={Icon4} />
              </a>
              <a>
                <img className="imghover" src={Icon5} />
              </a>
              <a>
                <img className="imghover" src={Icon6} />
              </a>
              <a>
                <img className="imghover" src={Icon7} />
              </a>
              <a>
                <img className="imghover" src={Icon8} />
              </a>
              <a>
                <img className="imghover" src={Icon9} />
              </a>
              <a>
                <img className="imghover" src={Icon10} />
              </a>
              <a>
                <img className="imghover" src={Icon11} />
              </a>
              <a>
                <img className="imghover" src={Icon13} />
              </a>
              <a>
                <img className="imghover" src={Icon14} />
              </a>
              <a>
                <img className="imghover" src={Icon15} />
              </a>
              <a>
                <img className="imghover" src={Icon16} />
              </a>
              <a>
                <img className="imghover" src={Icon17} />
              </a>
              <a>
                <img className="imghover" src={Icon18} />
              </a>
              <a>
                <img className="imghover" src={Icon19} />
              </a>
              <a>
                <img className="imghover" src={Icon20} />
              </a>
            </div>
            <div className="mobile">
              <Box style={{display:'flex', justifyContent:'center'}}>
                <FormControl>
                  <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={21} >
                    <MenuItem value={21}> <a href="/"><img className="logo2" src={Icon21} style={{ width: '275px'}} /></a> </MenuItem>
                    <MenuItem value={1}> <a href="/"><img className="imghover1" src={Icon1} />&emsp;Arsenal</a> </MenuItem>
                    <MenuItem value={2}> <a href="/"><img className="imghover1" src={Icon2} />&emsp;Aston Villa</a></MenuItem>
                    <MenuItem value={3}><a href="/"> <img className="imghover1" src={Icon3} />&emsp;Brighton And Hove Albion</a></MenuItem>
                    <MenuItem value={4}> <a href="/"><img className="imghover1" src={Icon4} />&emsp;Burnley</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon5} />&emsp;Chelsea</a></MenuItem>
                    <MenuItem value={5}>  <a href="/"><img className="imghover1" src={Icon6} />&emsp;CrystalPalace</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon7} />&emsp;Everton</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon8} />&emsp;Fulham</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon9} />&emsp;Leeds United</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon10} />&emsp;Leicester City</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon11} />&emsp;Liverpool</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon12} />&emsp;Manchester City</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon13} />&emsp;Manchester United</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon14} />&emsp;Newcastle United</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon15} />&emsp;Sheffield United</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon16} />&emsp;South Ampton</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon17} />&emsp;Tottenham Hotspur</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon18} />&emsp;West Bromwich Albion</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon19} />&emsp;West HamUnited</a></MenuItem>
                    <MenuItem value={5}> <a href="/"><img className="imghover1" src={Icon20} />&emsp;WolverhamptonWanderers</a></MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </nav>

        <div className="navbar1">
          {/* <a href="#"><img className="logo1" src="img/logo/logo2.png" alt="Logo" /></a> */}
          <a href="#/communities"><i class="fa fa-fw fa-home"></i> Home</a>
          <a href="#/fantasystatus"><i class="fa fa-fw fa-calendar-alt"></i> Status</a>
          <a href="#/fantasytransfer"><i class="fa fa-fw fa-exchange-alt"></i> Transform</a>
          <a href="#"><i class="fa fa-fw fa-futbol"></i> Leagues</a>
          <a href="#"><i class="fa fa-fw fa-globe"></i> Fixtures</a>
          <a href="#"><i class="fa fa-fw fa-border-style"></i> The Scout</a>
          <a href="#"><i class="fa fa-fw fa-podcast"></i> Podcast</a>
          <a href="#"><i class="fa fa-fw fa-chart-bar"></i> Stats</a>
          <a href="#"><i class="fa fa-fw fa-award"></i> Prizes</a>
          <a href="#"><i class="fa fa-fw fa-question-circle"></i> Help</a>
          <a href="#"><i class="fa fa-fw fa-buysellads"></i> Draft</a>
          <a href="#"><i class="fa fa-fw fa-user"></i> Sign Out</a>
        </div>
         <div style={{top:'70px'}}></div>
         <div className=' headerimage'></div>
       



      </div>

    );
  }
}






