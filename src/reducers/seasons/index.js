import { actionTypes } from '../../actions/seasons/type';

const initialState = {
  isLoading: false,
  seasons: []
}

export const seasonsReducer = (state = initialState, { type, payloads }) => {
  switch (type) {
    case actionTypes.FIND_ALL_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.FIND_ALL_SUCCESS: {
      const { seasons } = payloads;

      return {
        ...state,
        seasons,
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
    default:
      return state;
  }
}
