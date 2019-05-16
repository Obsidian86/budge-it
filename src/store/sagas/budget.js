import {put, takeEvery, all} from 'redux-saga/effects';
import * as datas from '../../data';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* appLoaded(){ 
  let data = {
    bills: datas.bills,
    income: datas.income
  } 
  yield delay(0);
  yield put({ type: 'UPDATE_DATA', data: data })
}

export function* WATCH_APP_LOAD(){
  yield takeEvery("TEST_DISPATCH", appLoaded);
}

export default function* rootSaga() {
  yield all([ 
    WATCH_APP_LOAD()
  ])
}