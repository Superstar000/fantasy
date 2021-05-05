import { SET_GAMEWEEK_PLAYER } from "../actions/types";
import Store from "../store"
const isEmpty = require("is-empty");

const initialState = {
  gamestate: false,
  gameplayer: {} 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAMEWEEK_PLAYER:      
      return {
        ...state,
        gameplayer:action.payload
       };     
    default:
      return state;
  }
}
