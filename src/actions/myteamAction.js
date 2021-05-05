import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_EXIST_MYTEAM } from "./types";

// Create My team
export const createMyteam = (userData, history,step) => dispatch => {
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
// Read My team Info
export const readMyteam = () => dispatch => {
  axios.get(`http://127.0.0.1:5000/api/fantasy/myteam`)
  .then(res => {    
    dispatch({
      type: SET_EXIST_MYTEAM,
      payload: res.response.data
    })
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