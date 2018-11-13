import {
  GET_NAVS,
  ADD_NAV,
  DELETE_NAV,
  NAVS_LOADING
} from '../actions/types';

const initialState = {
  navs: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NAVS:
      return {
        ...state,
        navs: action.payload,
        loading: false
      };
    case DELETE_NAV:
      return {
        ...state,
        navs: state.navs.filter(nav => nav._id !== action.payload)
      };
    case ADD_NAV:
      return {
        ...state,
        navs: [action.payload, ...state.navs]
      };
    case NAVS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
