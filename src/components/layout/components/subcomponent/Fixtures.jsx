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

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Fantasyfixturescomponent from "./Fantasyfixturescomponent";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "20px",
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
      marginBottom: "58px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "28px",
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

export default function Fixtures(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    // <div className="row" style={{ width:"auto",padding: '0 100px' }}>
    <div className="col-md-12 col-sm-12" style={{ padding: "0px" }}>
      <Card>
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
      </Card>
    </div>
    // </div>
  );
}
