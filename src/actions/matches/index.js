
import { actionTypes } from './type';
import * as matchesService from '../../services/matches';

export const findAll = (params) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.FIND_ALL_REQUEST,
    });
    try {
      const matches = await matchesService.findAll(params);

      dispatch({
        type: actionTypes.FIND_ALL_SUCCESS,
        payloads: { matches },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FIND_ALL_FAILURE,
        payloads: { error },
      });
    }
  }
}

export const findOne = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.FIND_ONE_REQUEST,
    });
    try {
      const match = await matchesService.findOne(_id);

      dispatch({
        type: actionTypes.FIND_ONE_SUCCESS,
        payloads: { match }
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FIND_ONE_FAILURE,
        payloads: { error }
      });
    }
  }
}