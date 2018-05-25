import {call, put} from 'redux-saga/effects'

import {createActions} from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  fakeDataRequest: [],
  restApiRequest: ['username'],
  success: ['data'],
  failure: ['error']
});

export const DemoType = Types;
export const DemoAction = Creators;
export const DemoFunction = {
  getFakeData,
  getRestData
};

function* getFakeData(api, action) {
  const response = yield call(api.getFakeData);
  yield put(DemoAction.success(response))
}

function* getRestData(api, action) {
  const {username} = action;
  const response = yield call(api.getUser, username);
  if (response.ok && response.status === 200) {
    yield put(DemoAction.success(JSON.stringify(response.data)))
  } else {
    yield put(DemoAction.failure(JSON.stringify(response.data)))
  }
}

