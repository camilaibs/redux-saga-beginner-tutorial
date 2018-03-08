import test from 'tape';
import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { workIncrementAsync } from './sagas'


test('Work Increment Async Saga', (assert) => {
    const gen = workIncrementAsync()

    assert.deepEqual(
        call(delay, 1000),
        gen.next().value,
        'incrementAsync Saga must call delay(1000)'
    )

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
      )

    assert.end()
})