import axios from 'axios';
import { GET_ITEMS, GET_ITEM_BY_ID, EDIT_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

const url = 'http://paullewisjohnston-server.herokuapp.com'

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`${url}/items`).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const getItemById = id => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`${url}/items/${id}`).then(res =>
    dispatch({
      type: GET_ITEM_BY_ID,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post(`${url}/items`, item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`${url}/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const editItem = item => dispatch => {
  axios.put(`${url}/items/${item._id}`).then(res =>
    dispatch({
      type: EDIT_ITEM,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
