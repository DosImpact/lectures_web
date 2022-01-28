import {
  put,
  delay,
  takeLeading,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { flagDown, flagUp, FLAG_UP_ASYNC, FLAG_DOWN_ASYNC } from "./actions";

// 특정 액션이 발생시- 처리하는 제너레이터
function* handleFlagUpSage() {
  yield delay(Math.ceil(Math.random() * 1000 + 500));
  yield put(flagUp());
}

function* handleFlagDownSage() {
  yield delay(Math.ceil(Math.random() * 1000 + 500));
  yield put(flagDown());
}

// flag 관련 액션들을 관찰하도록, 등록하는 제너레이터 함수
export function* flagSage() {
  yield takeEvery(FLAG_UP_ASYNC, handleFlagUpSage);
  yield takeLatest(FLAG_DOWN_ASYNC, handleFlagDownSage);
}
