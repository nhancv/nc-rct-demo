import { call, put } from 'redux-saga/effects'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Api from './Demo.Api'
import { DemoAction, DemoActionCode } from './Demo.Action'

export default DemoActionCode
export const DemoServices = Api.create()

/* ------------- Business logic ------------- */
export const DemoLogicFunc = {
  getFakeData,
  getRestData
}

function* getFakeData(api, action) {
  const response = yield call(api.getFakeData)
  yield put(DemoAction.success(response))
}

function* getRestData(api, action) {
  const { username } = action
  const response = yield call(api.getUser, username)
  if (response.ok && response.status === 200) {
    yield put(DemoAction.success(JSON.stringify(response.data)))
  } else {
    yield put(DemoAction.failure(JSON.stringify(response.data)))
  }
}

/* ------------- Initial State ------------- */
const INITIAL_STATE = Immutable({
  data: null,
  isFetching: false,
  error: false
})

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [DemoActionCode.FAKE_DATA_REQUEST]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [DemoActionCode.REST_API_REQUEST]: (state, action) => {
    return {
      ...state,
      data: null,
      isFetching: true,
      error: false
    }
  },
  [DemoActionCode.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.data,
      isFetching: false,
      error: false
    }
  },
  [DemoActionCode.FAILURE]: (state, action) => {
    return {
      ...state,
      data: action.error,
      isFetching: false,
      error: true
    }
  }
})
