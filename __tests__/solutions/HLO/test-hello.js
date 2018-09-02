const hello = require('../../../lib/solutions/HLO/hello');

describe('hello', () => {
  it('returns "Hello, World!"', () => {
    expect(hello('some string')).toEqual('Hello, World!');
  })
})
