import { actionTypes } from "../../actions/auth/type";
import { saveAuthData } from "../../helpers/auth";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  authData: null
}

export const authReducer = (state = initialState, { type, payloads }) => {
  switch (type) {
    case actionTypes.PASSWORD_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.PASSWORD_LOGIN_SUCCESS: {
      const { authData } = payloads;
      saveAuthData(authData);

      return {
        ...state,
        authData,
        isLoading: false,
        isAuthenticated: true
      }
    }
    case actionTypes.PASSWORD_LOGIN_FAILURE: {
      const { error } = payloads;
      return {
        ...state,
        isLoading: false,
        error
      }
    }
    default:
      return state;
  }
}
