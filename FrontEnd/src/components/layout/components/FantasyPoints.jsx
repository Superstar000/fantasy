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
import Fantasymyteamlist from "./subcomponent/Fantasymyteamlist";

var rootStyle = {
  position: "relative",
  borderRadius: "10px",
};

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
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
      padding: "20px",
    },
    [theme.breakpoints.down("md")]: {
    },
  },
  reffirst1: {
    [theme.breakpoints.up("lg")]: {
      color: "#ff2882",
    },
    [theme.breakpoints.down("md")]: {
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
  const [teamview, setteamview] = useState(true);

  const { data } = props;
  const handleview = (e) => {
    const teamview1 = !teamview;
    setteamview(teamview1);
  };

  return (
    <div className={classes.container}>
      <div className="col-md-12 col-sm-12" style={{ padding: "2% 10%" }}>
        <h2 style={{ color: 'white', textAlign: "left" , marginLeft:'15px' }}>Points</h2> 
        <div>&emsp;</div>
        <div className="col-md-8 col-sm-12">
          <Card>
            <div className="">
              <div className="col-md-12 col-sm-12 pickteam-blue1">
                <span className="pickteam-white1">
                  <b>Gameweek 34</b>
                </span>
              </div>
              <div className="col-md-12 col-sm-12 pickteam-blue1">
                <span className="pickteam-white">
                  <b>Fri 30 APr 23:00 </b>
                </span>
              </div>
              <div className="col-md-12 col-sm-12 pickteam-white pickteam-blue status-padding20">
                To change your captain use the menu which appears when clicking
                on a player's shirt.
              </div>
              <div className="col-md-12 col-sm-12 status-padding20 pickteam-blue1">
                &nbsp;
              </div>
              <div className="col-md-12 col-sm-12 status-padding20 pickteam-blue1">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "30px",
                  }}
                  onClick={handleview}
                >
                  <div className={teamview ? "pickteam-toggle-on" : ""}>
                    {" "}
                    Pitch View&nbsp;
                  </div>
                  <div className={!teamview ? "pickteam-toggle-off" : ""}>
                    {" "}
                    &nbsp; List View
                  </div>
                </Button>
              </div>
            </div>
            <CardActionArea>
              {teamview?
              <div style={{ position: "relative", background: "#29386D" }}>
                <img
                  src="./img/football.png"
                  width="100%"
                  style={{ minHeight: "500px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "15px",
                    left: "0%",
                  }}
                >
                  <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <img src="/img/sportman.png" width="" />
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                      <img src="/img/sportman.png" />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">&nbsp;</div>
                    <div className="col-md-2 col-sm-2 col-xs-2"></div>
                  </div>
                </div>
              </div>
              :<Fantasymyteamlist/>}
              <div className="col-md-12 col-sm-12 col-xs-12 text-center pickteam-white2">
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <img src="/img/sportman.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <img src="/img/sportman.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <img src="/img/sportman.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <img src="/img/sportman.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="col-md-4 col-sm-4 col-xs-4 status-padding">
                  Bench Boost
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 status-padding">
                  Triple Captain
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 status-padding">
                  Free Hit
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Button
                    fullWidth
                    style={{
                      textAlign: "left",
                      backgroundColor: "#8FD0BA",
                      borderRadius: "5px",
                    }}
                  >
                    PLAY
                  </Button>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Button
                    fullWidth
                    style={{
                      marginRight: "20px",
                      textAlign: "left",
                      backgroundColor: "#8FD0BA",
                      borderRadius: "5px",
                    }}
                  >
                    PLAY
                  </Button>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Button
                    fullWidth
                    style={{
                      marginRight: "20px",
                      textAlign: "left",
                      backgroundColor: "#8FD0BA",
                      borderRadius: "5px",
                    }}
                  >
                    PLAY
                  </Button>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 text-center status-padding20">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#D8D8D8",
                    borderRadius: "5px",
                  }}
                >
                  SAVE YOUR TEAM
                </Button>
              </div>
            </CardActionArea>
          </Card>
          <div className="col-md-12 col-sm-12 col-xs-12 status-padding">
            &nbsp;
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <img src="./img/logo.png" />
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <h4>Fixtures</h4>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <Button
              style={{
                textAlign: "left",
                backgroundColor: "white",
                borderRadius: "5px",
                color: "green",
                border: "0.5px green solid",
              }}
            >
              Sync to Calendar
            </Button>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="col-md-1 sol-sm-1 col-xs-2">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className="col-md-10 sol-sm-10 col-xs-8">
              Gameweek 34 - Fri 30 Apr 23:00
              <br />
              All times are shown in your local time
            </div>
            <div className="col-md-1 sol-sm-1 col-xs-2">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <Button
              style={{
                marginRight: "20px",
                textAlign: "left",
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
                color: "green",
                border: "0.5px green solid",
              }}
            >
              Saturday 1 May 2021
            </Button>
          </div>
          <div className="col-md-12 status-padding">&nbsp;</div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
          </div>
          <div className="col-md-12 status-padding">&nbsp;</div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
          </div>
          <div className="col-md-12 status-padding">&nbsp;</div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <Fantasyfixturescomponent />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <Card>
            <CardActionArea>
              <div className="col-md-12 col-sm-12 status-firstunder status-firstpadding">
                <div className="col-md-8 col-sm-8 text-left">
                  <b>nkit sethiya</b>
                </div>
                <div className="col-md-4 col-sm-4 text-center ">
                  <img src="./img/flag/india.png" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">Points/Ranking</div>
              <div className="col-md-12 col-sm-12">
                <div className="col-md-6 col-sm-6 text-center   status-firstpadding">
                  Overall Points:
                </div>
                <div className="col-md-6 col-sm-6 text-center   status-firstpadding"></div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="col-md-6 col-sm-6 text-center  status-firstpadding">
                  Overall Rank:
                </div>
                <div className="col-md-6 col-sm-6 text-center   status-firstpadding"></div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="col-md-6 col-sm-6 text-center  status-firstpadding">
                  Total Players:
                </div>
                <div className="col-md-6 col-sm-6 text-center status-firstpadding">
                  82,03,051
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="col-md-6 col-sm-6 text-center  status-firstpadding">
                  Gameweek Points
                </div>
                <div className="col-md-6 col-sm-6 text-center  status-firstpadding">
                  Bonus Points
                </div>
              </div>
              <div className="col-md-12 col-sm-12 status-firstpadding">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "30px",
                  }}
                >
                  View Gameweek history &nbsp;
                  <i
                    class="fa fa-arrow-right"
                    style={{ fontSize: "14px", color: "red" }}
                  ></i>
                </Button>
              </div>
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>
          <Card>
            <CardActionArea>
              <div className="col-md-12 col-sm-12 text-left status-firstunder status-firstpadding">
                <b>Kit</b>
              </div>
              <div className="col-md-12 col-sm-12 status-firstpadding">
                <div className="col-md-4 col-sm-4 text-center  status-firstpadding">
                  <img src="./img/clothes-1.png" width="90%" />
                </div>
                <div className="col-md-4 col-sm-4 text-center status-firstpadding">
                  <img src="./img/clothes-2.png" width="90%" />
                </div>
                <div className="col-md-4 col-sm-4 text-center status-firstpadding">
                  <img src="/img/clothes-3.png" width="90%" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 status-firstpadding">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "30px",
                  }}
                >
                  Design your kit &nbsp;
                  <i
                    class="fa fa-arrow-right"
                    style={{ fontSize: "14px", color: "red" }}
                  ></i>
                </Button>
              </div>
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>
          <Card>
            <CardActionArea>
              <div className="col-md-12 col-sm-12 text-left status-firstunder status-firstpadding">
                <b>Fan League</b>
              </div>
              <div className="col-md-12 col-sm-12">
                <img src="./img/t43.png" />
              </div>
              <div className="col-md-12 col-sm-12 status-firstpadding">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "30px",
                  }}
                >
                  Design your kit &nbsp;
                  <i
                    class="fa fa-arrow-right"
                    style={{ fontSize: "14px", color: "red" }}
                  ></i>
                </Button>
              </div>
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>
          <Card>
            <CardActionArea>
              <div className="col-md-12 col-sm-12 text-left status-firstunder status-firstpadding">
                <b>Broadcaster League</b>
              </div>
              <div className="col-md-12 col-sm-12 text-left">
                <img src="./img/947795.png" />
              </div>
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>
          <Card>
            <CardActionArea>
              <div className="col-md-12 col-sm-12 text-left status-firstunder status-firstpadding">
                <b>Global Leagues</b>
              </div>
              <div className="col-md-12 col-sm-12 text-left  status-firstpadding">
                Man City
              </div>
              <div className="col-md-12 col-sm-12 text-left status-firstpadding">
                India
              </div>
              <div className="col-md-12 col-sm-12  text-left status-firstpadding">
                Gameweek34
              </div>
              <div className="col-md-12 col-sm-12 text-left status-firstpadding">
                Overall
              </div>

              <div className="col-md-12 col-sm-12 status-firstpadding status-firstpadding">
                <Button
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "30px",
                  }}
                >
                  Create and Join Leagues &nbsp;
                  <i
                    class="fa fa-arrow-right"
                    style={{ fontSize: "14px", color: "red" }}
                  ></i>
                </Button>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </div> 
    </div>
  );
}
