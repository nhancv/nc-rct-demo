import {DemoType} from './Demo.Action'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: null,
  isFetching: false,
  error: false
});

/* ------------- Reducers ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [DemoType.FAKE_DATA_REQUEST]: (state, action) => {
    return {...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [DemoType.REST_API_REQUEST]: (state, action) => {
    return {...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [DemoType.SUCCESS]: (state, action) => {
    return {...state,
      data: action.data,
      isFetching: false,
      error: false
    }
  },
  [DemoType.FAILURE]: (state, action) => {
    return {...state,
      data: action.error,
      isFetching: false,
      error: true
    }
  }
});
