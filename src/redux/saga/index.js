import {all} from 'redux-saga/effects'
import {CategoryWatcher} from "./catalogSaga.js";

export function* rootWatcher () {
    yield all( [CategoryWatcher()])
}
