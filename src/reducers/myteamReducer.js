import { SET_EXIST_MYTEAM } from "../actions/types";
import Store from "../store"
const isEmpty = require("is-empty");

const initialState = {
  teamExist: false,
  user: {} 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXIST_MYTEAM:      
      return {
        ...state,
        teamExist:action.payload
       };     
    default:
      return state;
  }
}
