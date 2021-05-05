import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_GAMEWEEK_PLAYER } from "./types";

// game-api: player-list:gameweek: club: game-start-time
export const game_api1 = () => dispatch => {
  const apiUrl = '/api/bootstrap-static/';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log('This is your data', data)
          dispatch({
            type: SET_GAMEWEEK_PLAYER,
            payload: data
          })
        });
};
// Read My team Info
export const readMyteam = () => dispatch => {
  axios.get(`http://127.0.0.1:5000/api/fantasy/myteam`)
  .then(res => {    
    // dispatch({
    //   type: SET_EXIST_MYTEAM,
    //   payload: res.response.data
    // })
  });
};
// Update My team Info 

export const updateMyteam = (userData, history,step) => dispatch => {
  axios
      .post("http://127.0.0.1:5000/api/fantasy/myteam", "decoded")
      .then(res_myteam => {
          console.log("test");
          console.log(res_myteam);
      })
      .catch(err =>
        console.log("test")
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.response.data
        // })
      );
}; 