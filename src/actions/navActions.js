import axios from 'axios';
import { GET_NAVS, ADD_NAV, DELETE_NAV, NAVS_LOADING } from './types';

const url = 'http://paullewisjohnston-server.herokuapp.com'

export const getNavs = () => dispatch => {
  dispatch(setNavsLoading());
  axios.get(`${url}/navs`).then(res =>
    dispatch({
      type: GET_NAVS,
      payload: res.data
    })
  );
};

export const addNav = nav => dispatch => {
  axios.post(`${url}/navs`, nav).then(res =>
    dispatch({
      type: ADD_NAV,
      payload: res.data
    })
  );
};

export const deleteNav = id => dispatch => {
  axios.delete(`${url}/navs/${id}`).then(res =>
    dispatch({
      type: DELETE_NAV,
      payload: id
    })
  );
};

export const setNavsLoading = () => {
  return {
    type: NAVS_LOADING
  };
};
