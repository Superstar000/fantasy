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

function Premiermanagerscomponent(props) {
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
        <div className="col-md-12 col-sm-12 col-xs-12 text-center status-padding20">
          <div className="col-md-2 col-sm-2 col-xs-6 text-center">RMD</div>
          <div className="col-md-2 col-sm-2 col-xs-6 text-center">
            <img
              width="30px"
              height="30px"
              src="/t3.png"
              title="Contemplative Reptile"
            />
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 text-center">
            <span class="label label-default">00:30</span>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-6 text-center">
            <img
              width="30px"
              height="30px"
              src="/t3.png"
              title="Contemplative Reptile"
            />
          </div>
          <div className="col-md-2 col-sm-2 col-xs-6 text-center">CHE</div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 text-center status-padding20" 
        style={{padding:'0px'}}
        >
          <div className="col-md-1">
          </div>
          <div className="col-md-10" style={{borderBottom:'1px black solid',paddingBottom:'5px',paddingRight:'5px',paddingLeft:'5px'}}></div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 text-center status-padding">
          <img src="/img/fixtures_mark2.png" title="Fixture_mark" />
        </div>
      </Card>
    </div>
  );
}

export default Premiermanagerscomponent;
