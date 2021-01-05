
import { actionTypes } from './type';
import * as seasonsService from '../../services/seasons';

export const findAll = (params) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.FIND_ALL_REQUEST,
    });
    try {
      const seasons = await seasonsService.findAll(params);

      dispatch({
        type: actionTypes.FIND_ALL_SUCCESS,
        payloads: { seasons },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FIND_ALL_FAILURE,
        payloads: { error },
      });
    }
  }
}
