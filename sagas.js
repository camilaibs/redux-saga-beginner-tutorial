import { delay } from 'redux-saga'
import { all, takeEvery, put } from 'redux-saga/effects'


function* helloSaga() {
    console.log('Hello Saga!')
}

function* workIncrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', workIncrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}