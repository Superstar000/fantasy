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

import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import sportclub1 from "./../../../../img/sportclothe/shirt_11-66.svg";

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
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Premiertablescomponent(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;
  const handleClose = () => {
    //setAnchorEl(null);
    //if (props && props.onClick) {
    props.onMouseOut();
    //}
  };

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent style={{ padding: "0px" }}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              style={{
                margin: "0px",
                textAlign: "center",
                background: "#8FD0BA",
              }}
            >
              <i
                class="fa fa-arrow-circle-left"
                style={{ fontSize: "14px", color: "white" }}
              ></i>
              <font style={{ textAlign: "left" }}>
                <b>Most Valuable Teams</b>
              </font>
            </Button>
            <div className="col-md-12 col-md-12 status-padding">
              <div className="col-md-4 col-sm-4 text-center">
                <b>Pos</b>
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                <b>League</b>
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                <b> Average</b>
              </div>
            </div>
            <div className="col-md-12 col-md-12 status-padding">
              <div className="col-md-4 col-sm-4 text-center">
                1
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                @FPLHINTS 
(No Room for Racism)
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                2304.2
              </div>
            </div>
            <div className="col-md-12 col-md-12 status-padding">
              <div className="col-md-4 col-sm-4 text-center">
                2
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                @FPLHINTS 
(No Room for Racism)
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                2304.2
              </div>
            </div>
            <div className="col-md-12 col-md-12 status-padding">
              <div className="col-md-4 col-sm-4 text-center">
                3
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                @FPLHINTS 
(No Room for Racism)
              </div>
              <div className="col-md-4 col-sm-4 text-center">
                 2304.2
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </div> */}
    </div>
  );
}

export default Premiertablescomponent;
