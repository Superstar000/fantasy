import React from 'react';
import {Link} from 'react-router-dom'

function Submenubar(props){
    const handleClose = () => {
        //setAnchorEl(null); e.preventDefault();
        //if (props && props.onClick) {
            props.onMouseOut();
        //}
      };
    if(props.barstate==1){
        return(
            <div class="" style={{marginLeft:'80px'}}>
                <a href="#/fantasy" onClick={(e) => {  handleClose() }} className="btn-flat waves-effect menu2">
                        Fantasy
                </a>
                <a  href="#/fantasydraft" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                    Fantasy draft
                </a>
            </div>
        )
    }
    if(props.barstate==2){
        return(
            <div class="" style={{marginLeft:'80px'}}>
                <a href="#/fantasyfixtures" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">
                        Fixtures
                </a>
                <a  href="#/fantasystatus" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Status
                </a>
                <a  href="#/premierclubs" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Clubs
                </a>
                <a  href="#/premierfixtures" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Premier Fixtures
                </a>
                <a  href="#/premiermanagers" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Managers
                </a>
                <a  href="#/premierplayers" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Players
                </a>
                <a  href="#/premierreferees" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Referees
                </a>
                <a  href="#/premierresults" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Results
                </a>
                <a  href="#/premiertables" onClick={(e) => { handleClose() }} className="btn-flat waves-effect menu2">                
                       Tables
                </a>
            </div>
        )
    }
}

export default Submenubar;