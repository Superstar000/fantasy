import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: "350px",
    backgroundColor: "white",
    border: "10px solid #37003c",
    [theme.breakpoints.down('sm')]: {
      height: '250px',
    },
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function Globalleague() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" style={{ color: '#37003c', textAlign: "center" }}>
           Global League
       </Typography>
      <FixedSizeList height={300} itemSize={30} itemCount={20}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
