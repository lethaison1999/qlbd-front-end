
import { actionTypes } from './type';
import * as clubsService from '../../services/clubs';

export const findAll = (params) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.FIND_ALL_REQUEST,
    });
    try {
      const clubs = await clubsService.findAll(params);

      dispatch({
        type: actionTypes.FIND_ALL_SUCCESS,
        payloads: { clubs },
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
      const club = await clubsService.findOne(_id);

      dispatch({
        type: actionTypes.FIND_ONE_SUCCESS,
        payloads: { club },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FIND_ONE_FAILURE,
        payloads: { error },
      });
    }
  }
}

export const updateOne = (_id, payloads) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_ONE_REQUEST
    });
    try {
      const isUpdated = await clubsService.updateOne(_id, payloads);

      dispatch({
        type: actionTypes.UPDATE_ONE_SUCCESS,
        payloads: { isUpdated }
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ONE_FAILURE,
        payloads: { error }
      });
    }
  }
}

export const createOne = (payloads) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.CREATE_ONE_REQUEST
    });
    try {
      const club = await clubsService.createOne(payloads);

      dispatch({
        type: actionTypes.CREATE_ONE_SUCCESS,
        payloads: { club }
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_ONE_FAILURE,
        payloads: { error }
      });
    }
  }
}
