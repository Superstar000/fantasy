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
          <CardContent>
            <div className="col-md-12 col-xs-12">
              <div className="col-md-10 col-xs-10">
                <img
                  src={sportclub1}
                  alt="Cinque Terre"
                  width="30"
                  height="60"
                />
                Ramsdle
              </div>
              <div className="col-md-2 col-xs-2" style={{ marginTop: "5px" }}>
                <img
                  src="img/feather-info.png"
                  class="img-circle"
                  alt="Cinque Terre"
                  width="15"
                  height="15"
                />
              </div>
              <div className="col-md-6 col-xs-6">
                <span class="label label-success labelround">Club</span>
                <p>
                  <b>SHU</b>
                </p>
              </div>
              <div className="col-md-6 col-xs-6">
                <span class="label label-success labelround">Pts</span>
                <p>
                  {" "}
                  <b>09</b>
                </p>
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
