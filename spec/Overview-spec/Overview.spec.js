const fs = require('fs');
const Overview = require('../../client/src/components/Overview').default;

describe('Overview', () => {
  test('Overview should be a function', () => {
    expect(typeof Overview).toBe('function');
  });
});
