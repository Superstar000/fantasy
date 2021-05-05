import React from "react";
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



// import BG from './img/fantasystatus.png';

var rootStyle = {
  position: "relative",
  // width: "100%",
  // backgroundImage: `url(./img/fantasystatus.png)`,
  // height: "200px",
  // backgroundSize: 'cover',
  // backgroundPosition: 'cover',
  borderRadius: "10px",
  //  marginTop: '-5rem',
  //  paddingTop: '1rem',
  //  paddingRight: '70%'
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
    // margin: '30px',
    // [theme.breakpoints.up('md')]: {
    //   margin: "30px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   margin: "30px",
    // },
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
  const { data } = props;

  return (
    <div className={classes.container} id="buy-space">
      <h2 className={classes.title}></h2>

      <div className="row">
        <h3 style={{ color: "#585858", textAlign: "left", paddingLeft: "5%" }}>
          Gameweek 33 Status{" "}
        </h3>
      </div>
      <div
        className="col-md-12 col-sm-12 col-xs-12"
        style={{ padding: "0 5%" }}
      >
        <Card>
          <CardActionArea>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-4 col-sm-4 text-center status-firstunder status-firstpadding">
                Day
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstunder status-firstpadding">
                Match Points
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstunder status-firstpadding">
                Bonus Points
              </div>

              <div className="col-md-4 col-sm-4 text-center status-firstpadding">
                Friday 23 April
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstpadding status-green">
                confirmed
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstpadding status-green">
                Added
              </div>

              <div className="col-md-4 col-sm-4 text-center status-firstpadding">
                Friday 23 April
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstpadding status-green">
                Confirmed
              </div>
              <div className="col-md-4 col-sm-4 text-center status-firstpadding status-green">
                Added
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>
      <div className="col-md-12" style={{ padding: "0.1%" }}>
        &nbsp;
      </div>
      <div>
        <h3 style={{ color: "#585858", textAlign: "left", paddingLeft: "5%" }}>
          League Tables{" "}
        </h3>
      </div>
      <div
        className="col-md-12 col-sm-12"
        style={{ padding: "0 5%", paddingTop: "1%" }}
      >
        <div className="col-md-7 col-sm-12" style={{ padding: "0px" }}>
          <Card style={rootStyle}>
            <CardActionArea>
              <CardContent style={{ padding: "0px" }}>
                <img src="img/fantasystatus4.png" width="100%" height="100%" />

                <div
                  className="col-md-12"
                  style={{ position: "absolute", top: "40px" }}
                >
                  <div className="text-left status-letter2">
                    &nbsp;&nbsp;GAMEWEEK 33
                  </div>
                  <div
                    className="fantasystatus1"
                    style={{ position: "absolute", top: "30px" }}
                  >
                    <Button
                      style={{ borderRadius: "20px" }}
                      variant="contained"
                      color="secondary"
                      style={{
                        marginLeft: "20px",
                        marginRight: "20px",
                        textAlign: "left",
                        backgroundColor: "#29376D",
                      }}
                    >
                      <b>
                        My Team &nbsp;{" "}
                        <i
                          class="fa fa-angle-down"
                          style={{ fontSize: "12px", color: "white" }}
                        ></i>
                      </b>
                    </Button>
                  </div>
                  <div
                    className="fantasystatus1"
                    style={{
                      position: "absolute",
                      top: "80px",
                      borderRadius: "15px",
                    }}
                  >
                    <Button
                      style={{ borderRadius: "30px" }}
                      variant="contained"
                      color="secondary"
                      style={{
                        marginLeft: "20px",
                        marginRight: "20px",
                        textAlign: "left",
                        borderRadius: "20px",
                      }}
                    >
                      <b>QUICK VIEW</b>
                    </Button>
                  </div>
                </div>
                <div className="col-md-12 status-letter4">
                  <div className="col-md-2 status-letter3">
                    Highest <br />
                    <b>110</b>
                  </div>
                  <div className="col-md-2 status-letter3">
                    Average Points
                    <br />
                    <b>36</b>
                  </div>
                  <div className="col-md-2 status-letter3">
                    Transfers Made
                    <br />
                    <b>71,68,569</b>
                  </div>
                  <div className="col-md-2 status-letter3">
                    Most Transferred In <br />
                    <b>Vardy</b>
                  </div>
                  <div className="col-md-2 status-letter3">
                    Wildcards Played
                    <br />
                    <b>1,17,586</b>
                  </div>
                  <div className="col-md-2 status-letter3">
                    Most Captained
                    <br />
                    <b>Salah</b>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
          <div className="row">
            <h3
              style={{
                color: "#585858",
                textAlign: "left",
                paddingLeft: "",
                paddingTop: "3%",
              }}
            >
              Latest form the Scouts{" "}
            </h3>
          </div>
          <Card style={rootStyle}>
            <CardActionArea>
              <CardContent style={{ padding: "0px" }}>
                <img
                  src="img/fantasystatus3.png"
                  width="100%"
                  style={{ padding: "0px" }}
                />

                <div
                  className="col-md-6 fantasystatus"
                  style={{ position: "absolute", top: "40%" }}
                >
                  <p className="status-letter">
                    GW33 FPL stats: Salah the top captain again
                  </p>
                  <p className="status-letter1">
                    Liverpool star is the most-popular armband pick for 10th
                    time this season for Newcastle's visit
                  </p>
                  <p className="status-letter1">23/04/2021</p>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-5 col-sm-12" style={{ paddingRight: "0px" }}>
          <div>
            <Card>
              <CardActionArea>
                <CardContent>
                  <h3 style={{ margin: "0px" }}>
                    <b>KING 0F GW 33</b>
                  </h3>
                  <br />
                   119-> 
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="row" style={{ paddingTop: "5px", display: "flex" }}>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
          </div>
          <div className="row" style={{ paddingTop: "5px", display: "flex" }}>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
          </div>
          <div className="row" style={{ paddingTop: "5px", display: "flex" }}>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
            <div className="col-md-4">
              {" "}
              <Fantasystatus01component />
            </div>
          </div>
        </div>
      </div>
      

      <div className="col-md-12 col-sm-12" style={{ paddingLeft: "5%",paddingTop:'1%',paddingRight:'5%',paddingBottom:'1%' }}>
        <div className="col-md-6 col-sm-6" style={{padding:'0px'}}>
          <Fantasystatus02component />
        </div>
        <div className="col-md-6 col-sm-6" style={{padding:'0px',paddingLeft:'10px'}}>
          <Fantasystatus03component />
        </div>
      </div>
      <div className="col-md-12 col-sm-12" style={{ paddingLeft: "5%",paddingTop:'1%',paddingRight:'5%',paddingBottom:'1%' }}>
        <div className="col-md-4 col-sm-4" style={{padding:'0px',paddingRight:'5px'}}>
        <Fantasystatus04component />
        </div>
        <div className="col-md-4 col-sm-4" style={{padding:'0px'}}>
        <Fantasystatus05component />
        </div>
        <div className="col-md-4 col-sm-4" style={{padding:'0px',paddingLeft:'5px'}}>
        <Fantasystatus06component />
        </div>
      </div>

     
      <div >
        <h3 style={{ color: "#585858", textAlign: "left",  paddingLeft: "5%",paddingTop:'1%',paddingRight:'5%',paddingBottom:'1%' }}>
        Player Availability{" "}
        </h3>
      </div>

      <div className="col-md-12 col-sm-12" style={{ padding: '0 5%' }}>
          <div className="col-md-4 col-sm-12 status-zero" style={{padding:'0px',paddingRight:'4px'}} >
          <Scoutplayercomponent/>
          </div>
          <div className="col-md-4 col-sm-12 status-zero" style={{padding:'0px 2px'}}>
          <Scoutplayercomponent/>
          </div>
          <div className="col-md-4 col-sm-12 status-zero" style={{padding:'0px',paddingLeft:'4px'}}>
          <Scoutplayercomponent/>
          </div>
        </div>
    </div>
  );
}
