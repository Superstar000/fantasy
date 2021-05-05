import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MuiButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

function Submenubar_bar(props){
  // const [menuFlag, setMenuFlag] = useState(true);
    const handleClose = () => {
        //setAnchorEl(null);
        //if (props && props.onClick) {
            props.onMouseOut();
        //}
    };
    

    return(
        <div className="col-md-12">    
                <div className="col-md-2"></div>
                <div className="col-md-1">
                <a className="btn-flat waves-effect menu3" href=""><span>News</span></a>
                </div>
                <div className="col-md-1">
                <a className="btn-flat waves-effect menu3" href="#/fantasyprizes">Set Pieces</a>
                </div>
                <div className="col-md-1">
                <a className="btn-flat waves-effect menu3" href="#/fantasyscouts" onMouseOver={(e) => {    
                e.preventDefault();
                // alert()
                // this.setState({
                //   menubarstate: 1
                // })            
                }}>Abailability</a>
                </div>
                <div className="col-md-3"></div>
                
    </div>
    )
}

export default Submenubar_bar;