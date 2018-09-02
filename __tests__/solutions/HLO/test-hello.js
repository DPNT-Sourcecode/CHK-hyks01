const hello = require('../../../lib/solutions/HLO/hello');

describe('hello', () => {
  it('returns a string', () => {
    expect(hello('some string')).toEqual('some string');
  })
})
