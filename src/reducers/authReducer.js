import { SET_CURRENT_USER, USER_LOADING, SET_PLAN_WITH_CARD,REGISTER_INFO } from "../actions/types";
import Store from "../store"
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  reg_info: {},
  planwithwhat: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_INFO:      
      return {
        ...state,
        reg_info:action.payload,    
       };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_PLAN_WITH_CARD:
      return {
        ...state,
        planwithwhat: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
