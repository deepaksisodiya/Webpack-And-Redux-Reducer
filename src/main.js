/**
 * Created by deepaksisodiya on 11/12/15.
 */

var expect = require('expect');

// reducer in redux
// pure function
function counter(state, action) {
  if(typeof state === 'undefined') {
    return 0;
  } else if(action.type === 'INCREMENT') {
    return state + 1;
  } else if(action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
  counter(1, {type: 'SOMETHING_ELSE'})
).toEqual(1);

expect(
  counter(undefined, {})
).toEqual(0);

console.log('Test Passed');