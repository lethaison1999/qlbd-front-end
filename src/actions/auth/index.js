
import * as authService from '../../services/auth';
import { actionTypes } from './type';

export const passwordLogin = (loginData) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.PASSWORD_LOGIN_REQUEST
    })
    try {
      const authData = await authService.passwordLogin(loginData);

      dispatch({
        type: actionTypes.PASSWORD_LOGIN_SUCCESS,
        payloads: { authData }
      })
    } catch (error) {
      dispatch({
        type: actionTypes.PASSWORD_LOGIN_FAILURE,
        payloads: { error }
      })
    }
  }
}
