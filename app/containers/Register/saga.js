import { takeLatest, call, put, select } from 'redux-saga/effects';
import { registerSuccess, registerError } from 'containers/Register/actions';

// import React from 'react';
import request from 'utils/request';
import { makeSelectEmail, makeSelectPass } from 'containers/Register/selectors';
import { baseURL } from 'utils/helpers';
import { push } from 'connected-react-router';
import { REGISTERING } from './constants';

/**
 * Backend login request/response handler
 */
export function* registerReq() {
  const currEmail = yield select(makeSelectEmail());
  const currPass = yield select(makeSelectPass());

  const state = {
    email: currEmail,
    pass: currPass,
  };

  const requestURL = `${baseURL}/api/auth/register`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Bearer: localStorage.getItem(jwtToken),
    },
    body: JSON.stringify(state),
  };
  try {
    // console.log(JSON.stringify(state));
    // Call our request helper (found in 'utils/request')
    const res = yield call(request, requestURL, options);
    yield put(registerSuccess(res, state));
    yield put(push('/login'));
  } catch (err) {
    yield put(registerError(err));
  }
}

export default function* registerData() {
  yield takeLatest(REGISTERING, registerReq);
}
