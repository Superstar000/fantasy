import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import MuiCardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MuiButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import Socialbar from "./subcomponent/socialbar";
import Fantasystatus01component from "./subcomponent/Fantasystatus01component";
import Fantasystatus02component from "./subcomponent/Fantasystatus02component";
import Fantasystatus03component from "./subcomponent/Fantasystatus03component";
import Fantasystatus04component from "./subcomponent/Fantasystatus04component";
import Fantasystatus05component from "./subcomponent/Fantasystatus05component";
import Fantasystatus06component from "./subcomponent/Fantasystatus06component";
import Scoutplayercomponent from "./subcomponent/Scoutplayercomponent";
import Fantasyfixturescomponent from "./subcomponent/Fantasyfixturescomponent";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";



const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: '100%',
    height: 'auto'
  },
  txtAlign: {
    textAlign: "left",
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      marginRight: 0,
      marginLeft: 0,
    },
  },
  title: {
    fontFamily: "initial",
    marginBottom: "60px",
  },
  reffirst: {
    [theme.breakpoints.up("lg")]: {
      //marginBottom: 'px'
      padding: "20px",
    },
    [theme.breakpoints.down("md")]: {
      //marginBottom: '28px'
    },
  },
  reffirst1: {
    [theme.breakpoints.up("lg")]: {
      //marginBottom: 'px'
      color: "#ff2882",
    },
    [theme.breakpoints.down("md")]: {
      //marginBottom: '28px'
      color: "#ff2882",
    },
  },

  minH: {
    [theme.breakpoints.up("md")]: {
      minHeight: "270px",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "270px",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Button = withStyles((theme) => ({
  root: {
    padding: "10px 40px",
    fontSize: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "10px 40px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 30px",
    },
  },
}))(MuiButton);

const CardActions = withStyles((theme) => ({
  root: {
    padding: "10px",
    [theme.breakpoints.up("lg")]: {
      padding: "14px 25px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "15px 25px ",
    },
  },
}))(MuiCardActions);

export default function FantasyStatus(props) {
  const classes = useStyles();
  const history = useHistory();
  const [teamview, setteamview] = useState(false);
  const { data } = props;
  const handleview = (e) => {
    const teamview1 = !teamview;
    setteamview(teamview1);
  };

  return (
    <div className={classes.container} >

      <div className="col-md-12 col-sm-12" style={{ padding: "2% 10%" }}>
        <h2 style={{ color: 'white', textAlign: 'left' }}>My Leagues</h2>
        <div>&emsp;</div>
        <Card style={{backgroundColor:' rgb(247 48 245)'}}>
          <CardContent >
            <Card style={{ padding: '0px' }}>
              <div className="col-md-12 col-sm-12">
                <div className="col-md-6 col-sm-6">
                  <select className="minimal">
                    <option>Create and Join Leagues</option>
                    <option>Second</option>
                    <option>Third</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-6">
                  <select className="minimal">
                    <option>Renew your leaguese</option>
                    <option>Second</option>
                    <option>Third</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 ">&nbsp;</div>
            </Card>

            <div className="col-md-12 col-sm-12 ">&nbsp;</div>
            <div className="col-md-12 col-sm-12" style={{ padding: '0px' }}>
              <div className="col-md-6 col-sm-6 status-padding3">
                <Card >
                  <br />
                  <h5>Private Classic Leagues</h5>
                  <br />
                </Card>
              </div>
              <div className="col-md-6 col-sm-6 status-padding3">
                <Card >
                  <br />
                  <h5>Private head to head leagues</h5>
                  <br />
                </Card>
              </div>
            </div>

            <div className="col-md-12 col-sm-12" style={{ padding: '0px' }}>
              &nbsp;<br />
              <div className="col-md-2 col-sm-2">League</div>
              <div className="col-md-2 col-sm-2">Current Rank</div>
              <div className="col-md-2 col-sm-2">Last Rank</div>
              <div className="col-md-2 col-sm-2">League</div>
              <div className="col-md-2 col-sm-2">Current Rank</div>
              <div className="col-md-2 col-sm-2">Last Rank</div>
              <br />&nbsp;
        </div>
            <div className="col-md-12 col-sm-12 ">
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br /></Card>
              </div>
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br /></Card>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">&nbsp;</div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />Public head to head leagues<br />&nbsp;</Card>
              </div>
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />Public classic leagues<br />&nbsp;</Card>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              &nbsp;<br />
              <div className="col-md-2 col-sm-2">League</div>
              <div className="col-md-2 col-sm-2">Current Rank</div>
              <div className="col-md-2 col-sm-2">Last Rank</div>
              <div className="col-md-2 col-sm-2">League</div>
              <div className="col-md-2 col-sm-2">Current Rank</div>
              <div className="col-md-2 col-sm-2">Last Rank</div>
              <br />
            </div>

            <div className="col-md-12 col-sm-12">&nbsp;</div>
            <div className="col-md-12 col-sm-12 ">
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br /></Card>
              </div>
              <div className="col-md-6 col-sm-6">
                <Card>&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br /></Card>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">&nbsp;</div>
            <div className="col-md-12 col-sm-12 text-left">
              <Card>&nbsp;<br /><h4>Global leagues</h4><br /> </Card>
            </div>
            <div className="col-md-12 col-sm-12">
              &nbsp;<br />
              <div className="col-md-4 col-sm-4 text-left">League</div>
              <div className="col-md-4 col-sm-4 text-left">Current Rank</div>
              <div className="col-md-4 col-sm-4 text-left">Last Rank</div>
              <br />&nbsp;
        </div>
            <div className="col-md-12 col-sm-12">
              <Card>
                &nbsp;<br />
                <div className="col-md-10 col-sm-10 text-left">Man City</div>
                <div className="col-md-2 col-sm-2">
                  <i class="fa fa-cog fa-spin" style={{ fontSize: '14px' }}></i>Options</div>
                <br /> &nbsp;
          </Card>
            </div>
            <div className="col-md-12 col-sm-12">
              &nbsp;<br />
              <div className="col-md-10 col-sm-10 text-left">India</div>
              <div className="col-md-2 col-sm-2">
                <i class="fa fa-cog fa-spin" style={{ fontSize: '14px' }}></i>Options</div>
              <br /> &nbsp;
        </div>
            <div className="col-md-12 col-sm-12">
              <Card>
                &nbsp;<br />
                <div className="col-md-10 col-sm-10 text-left">Gameweek 34</div>
                <div className="col-md-2 col-sm-2">
                  <i class="fa fa-cog fa-spin" style={{ fontSize: '14px' }}></i>Options</div>

                <br /> &nbsp;
          </Card>
            </div>
            <div className="col-md-12 col-sm-12">
              &nbsp;<br />
              <div className="col-md-10 col-sm-10 text-left">Overall</div>
              <div className="col-md-2 col-sm-2">
                <i class="fa fa-cog fa-spin" style={{ fontSize: '14px' }}></i>Options</div>
              <br /> &nbsp;
        </div>
            <div className="col-md-12 col-sm-12">
              <Card>
                &nbsp;<br />
                <div className="col-md-10 col-sm-10 text-left">Star Sports</div>
                <div className="col-md-2 col-sm-2">
                  <i class="fa fa-cog fa-spin" style={{ fontSize: '14px' }}></i>Options</div>
                <br /> &nbsp;
          </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
