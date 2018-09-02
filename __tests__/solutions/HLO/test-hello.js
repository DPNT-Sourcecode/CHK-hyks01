const hello = require('../../../lib/solutions/HLO/hello');

describe('hello', () => {
  it('returns a string containing the friend name', () => {
    expect(hello('john')).toEqual('Hello, john!');
  });

  it('returns a string containing the input friends name', () => {
    expect(hello('Lucy')).toEqual('Hello, Lucy!');
  });
});
