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
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";





const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: '100%',
    height: '2300px',
    paddingTop: "40px",
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
const columns = [
  { id: "name", label: "!", minWidth: 170 },
  { id: "code", label: "Players", minWidth: 100 },
  {
    id: "population",
    label: "Cost",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
export default function FantasyStatus(props) {
  const classes = useStyles();
  const history = useHistory();
  const [teamview, setteamview] = useState(false);
  const [goalkeeper, setgoalkeeper] = useState(columns);

  // setgoalkeeper(columns);
  const { data } = props;
  const handleview = (e) => {
    const teamview1 = !teamview;
    setteamview(teamview1);
  };

  return (
    <div className={classes.container} >
      <div className="col-md-12 col-sm-12" style={{ padding: " 2% 10%" }}>
        <div className="col-md-12 col-sm-12">
          <h2 style={{ color: "white", textAlign:'left'}}>Transfer</h2>
        </div>
        <div className="col-md-12 col-sm-12 text-left">
          Select a maximum of 3 players from a single team or 'Auto Pick' if
          you're short of time.
        </div>
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
              <div className="col-md-12 col-sm-12 status-padding pickteam-blue1">
                &nbsp;
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 pickteam-blue1">
                <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                  <Button
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      textAlign: "left",
                      backgroundColor: "#8FD0BA",
                      borderRadius: "15px",
                    }}
                    onClick={handleview}
                  >
                    AUTO PICK
                  </Button>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                  <Button
                    style={{
                      marginLeft: "20px",
                      marginRight: "20px",
                      textAlign: "left",
                      backgroundColor: "#8FD0BA",
                      borderRadius: "15px",
                    }}
                    onClick={handleview}
                  >
                    RESET
                  </Button>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 status-padding pickteam-blue1">
                &nbsp;
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 pickteam-blue1">
                <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                  Players Selected
                  <br /> 15/15
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 text-left">
                  Money Remaining
                  <br /> 5.7
                </div>
              </div>
              <div className="col-md-12 col-sm-12 status-padding pickteam-blue1">
                &nbsp;
              </div>
              <div className="col-md-12 col-sm-12 status-padding pickteam-blue1">
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
              {/* second  player */}
              <div
                className="col-md-12 col-sm-12 col-xs-12 text-center"
                style={{ position: "absolute", bottom: "40px", left: "0%" }}
              >
                <Button
                  style={{
                    textAlign: "left",
                    backgroundColor: "#8FD0BA",
                    borderRadius: "5px",
                  }}
                >
                  MAKE TRANSFERS
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
            <div className="col-md-12 col-sm-12 status-firstunder status-firstpadding">
              <div className="col-md-8 col-sm-8 text-left">
                <h3>
                  <b>Player Selection</b>
                </h3>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 text-left">
              <b>View</b>
            </div>
            <div className="col-md-12 col-sm-12">
              <select class="minimal">
                <option>All Players</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
            <div className="col-md-12 col-sm-12 text-left">
              <b>Sorted by</b>
            </div>
            <div className="col-md-12 col-sm-12">
              <select class="minimal">
                <option>Total Points</option>
                <option>Second</option>
                <option>Third</option>
              </select>
            </div>
            <div className="col-md-12 col-sm-12 text-left">
              <b>Search</b>
            </div>
            <div className="col-md-12 col-sm-12">
              <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </div>
            <div className="col-md-12 col-sm-12 text-left">
              <b>Max cost</b>
              <br />
              Between 3.8 and 12.7
            </div>
            <div className="col-md-12 col-sm-12">
              <select class="minimal">
                <option>12.7</option>
                <option>12.9</option>
                <option>13</option>
              </select>
            </div>
          </Card>
          <div style={{ padding: "5px" }}></div>

          <div style={{ padding: "5px" }}>572 Players Shown</div>
          <Card style={{ borderRadius: "10px" }}>
            <CardActionArea>
              <div
                className="col-md-12 col-sm-12 col-xs-12 status-firstunder"
                style={{ background: "#3F5398" }}
              >
                <div className="col-md-6 col-sm-6 text-left   status-firstpadding">
                  <b>Goal keepers</b>
                </div>
                <div className="col-md-3 col-sm-3  status-firstpadding">£</div>
                <div className="col-md-3 col-sm-3  status-firstpadding">**</div>
              </div>
              {goalkeeper.map((item) => (
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="col-md-1 col-sm-1 text-left status-firstpadding">
                    <img src="./img/feather-info.png" />
                  </div>
                  <div className="col-md-2 col-sm-2 text-left status-firstpadding">
                    <img
                      src="./img/sportclothe/shirt_4-66.svg"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 text-center">
                    Balbuena <br />
                    WHU DEF
                  </div>
                  <div className="col-md-3 col-sm-3 text-center status-firstpadding">
                    5.4
                  </div>
                  <div className="col-md-3 col-sm-3 status-firstpadding">
                    164
                  </div>
                </div>
              ))}
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>
          <Card style={{ borderRadius: "10px" }}>
            <CardActionArea>
              <div
                className="col-md-12 col-sm-12 col-xs-12 status-firstunder"
                style={{ background: "#3F5398" }}
              >
                <div className="col-md-6 col-sm-6 text-left   status-firstpadding">
                  <b>Defenders</b>
                </div>
                <div className="col-md-3 col-sm-3  status-firstpadding">£</div>
                <div className="col-md-3 col-sm-3  status-firstpadding">**</div>
              </div>
              {goalkeeper.map((item) => (
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="col-md-1 col-sm-1 text-left status-firstpadding">
                    <img src="./img/feather-info.png" />
                  </div>
                  <div className="col-md-2 col-sm-2 text-left status-firstpadding">
                    <img
                      src="./img/sportclothe/shirt_4-66.svg"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 text-center">
                    Balbuena <br />
                    WHU DEF
                  </div>
                  <div className="col-md-3 col-sm-3 text-center status-firstpadding">
                    5.4
                  </div>
                  <div className="col-md-3 col-sm-3 status-firstpadding">
                    164
                  </div>
                </div>
              ))}
            </CardActionArea>
          </Card>
          <div style={{ padding: "5px" }}></div>

          <Card style={{ borderRadius: "10px" }}>
            <CardActionArea>
              <div
                className="col-md-12 col-sm-12 col-xs-12 status-firstunder"
                style={{ background: "#3F5398" }}
              >
                <div className="col-md-6 col-sm-6 text-left   status-firstpadding">
                  <b>Forwards</b>
                </div>
                <div className="col-md-3 col-sm-3  status-firstpadding">£</div>
                <div className="col-md-3 col-sm-3  status-firstpadding">**</div>
              </div>
              {goalkeeper.map((item) => (
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="col-md-1 col-sm-1 text-left status-firstpadding">
                    <img src="./img/feather-info.png" />
                  </div>
                  <div className="col-md-2 col-sm-2 text-left status-firstpadding">
                    <img
                      src="./img/sportclothe/shirt_4-66.svg"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="col-md-3 col-sm-3 text-center">
                    Balbuena <br />
                    WHU DEF
                  </div>
                  <div className="col-md-3 col-sm-3 text-center status-firstpadding">
                    5.4
                  </div>
                  <div className="col-md-3 col-sm-3 status-firstpadding">
                    164
                  </div>
                </div>
              ))}
            </CardActionArea>
          </Card>
          <div className="col-md-12 col-sm-12 text-center">
            {/* <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <ArrowForwardIcon />
            </IconButton> */}
          </div>
        </div>
        </div>
      <div className="col-md-12" style={{ padding: "0.1%" }}>
        &nbsp;
      </div>
    </div>
  );
}
