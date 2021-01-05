import { actionTypes } from '../../actions/clubs/type';

const initialState = {
  isLoading: false,
  clubs: []
}

export const clubsReducer = (state = initialState, { type, payloads }) => {
  switch (type) {
    case actionTypes.FIND_ALL_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.FIND_ALL_SUCCESS: {
      const { clubs } = payloads;

      return {
        ...state,
        clubs,
        isLoading: false,
      }
    }
    case actionTypes.FIND_ALL_FAILURE: {
      const { error } = payloads;
      return {
        ...state,
        isLoading: false,
        error
      }
    }
    case actionTypes.FIND_ONE_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.FIND_ONE_SUCCESS: {
      const { club } = payloads;

      return {
        ...state,
        club,
        isLoading: false,
      }
    }
    case actionTypes.FIND_ONE_FAILURE: {
      const { error } = payloads;
      return {
        ...state,
        isLoading: false,
        error
      }
    }
    case actionTypes.UPDATE_ONE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isUpdated: false
      }
    }
    case actionTypes.UPDATE_ONE_SUCCESS: {
      const { isUpdated } = payloads;

      return {
        ...state,
        isUpdated,
        isLoading: false
      }
    }
    case actionTypes.UPDATE_ONE_FAILURE: {
      const { error } = payloads;
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        error
      }
    }
    case actionTypes.CREATE_ONE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isUpdated: false
      }
    }
    case actionTypes.CREATE_ONE_SUCCESS: {
      const { club } = payloads;

      return {
        ...state,
        club,
        isUpdated: true,
        isLoading: false
      }
    }
    case actionTypes.CREATE_ONE_FAILURE: {
      const { error } = payloads;
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        error
      }
    }
    default:
      return state;
  }
}
