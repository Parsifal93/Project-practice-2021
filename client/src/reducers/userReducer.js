import ACTION from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case ACTION.AUTH_ACTION_REFRESH: {
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null,
      };
    }
    case ACTION.AUTH_ACTION_CANCEL: {
      return { ...state, isFetching: false };
    }
    case ACTION.AUTH_ACTION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    
    default:
      return state;
  }
}
