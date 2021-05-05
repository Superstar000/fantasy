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

import PropTypes from "prop-types";
// import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import shirt1 from "./../../../../img/clubs/Arsenal.png";

const emails = ["username@gmail.com", "user02@gmail.com"];

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
const useStyles1 = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 700,
    height:"100%",
    maxHeight:400,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "80%",
    maxHeight: 435,
    zIndex:100
  },
}));
function SimpleDialog(props) {
  const classes1 = useStyles1();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <div className={classes1.root}>
      <Dialog
        onClose={handleClose}
        fullWidth
        aria-labelledby="simple-dialog-title"
        open={open}  
      >
        <DialogTitle id="simple-dialog-title">
          {" "}
          <div style={{display:"inline"}}>
                  <div className="col-md-2 col-sm-2">
            <img
              class="rounded-circle"
              src={shirt1}
              title="Contemplative Reptile"
            />
          </div>
          <div className="col-md-4 col-sm-4 text-center">Welcome</div>
          <div className="col-md-5 col-sm-5">&nbsp;</div>
          <div className="col-md-1 col-sm-1">
            
            {" "}
            <IconButton
              aria-label="close"
              className={classes1.closeButton}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          </div>
        </DialogTitle>
        <table className="dialog-table">
          <tr className="scout-dialog-table">
            <td>Penalties</td>
            <td>Direct free kicks</td>
            <td>Corners & indirect free kicks</td>
          </tr>
          {emails.map((email) => (
            <tr>
              <td>{email}</td>
              <td>Direct free kicks</td>
              <td>Corners & indirect free kicks</td>
            </tr>
          ))}
        </table>
      </Dialog>
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
function Premierresultcomponent(props) {
  const classes1 = useStyles();
  const history = useHistory();
  const { data } = props;
  const handleClose = () => {
    //setAnchorEl(null);
    //if (props && props.onClick) {
    props.onMouseOut();
    //}
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Card>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleDialogClose}
        />
        <div className="col-md-12 col-xs-12" style={{ padding: "25px" }}>
          <div>
            <img
              onClick={handleClickOpen}
              class="rounded-circle"
              src={shirt1}
              title="Contemplative Reptile"
            />
          </div>
          <div>Areselnal</div>
        </div>
      </Card>
    </div>
  );
}

export default Premierresultcomponent;
