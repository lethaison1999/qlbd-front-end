import { actionTypes } from '../../actions/matches/type';

const initialState = {
  isLoading: false,
  matches: []
}

export const matchesReducer = (state = initialState, { type, payloads }) => {
  switch (type) {
    case actionTypes.FIND_ALL_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.FIND_ALL_SUCCESS: {
      const { matches } = payloads;

      return {
        ...state,
        matches,
        isLoading: false
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
      const { match } = payloads;

      return {
        ...state,
        match,
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
    default:
      return state;
  }
}
