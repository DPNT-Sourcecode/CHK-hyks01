const checkout = require('../../../lib/solutions/CHK/checkout');

describe('checkout', () => {
  it('returns -1 for any illegal input', () => {
    expect(checkout('illegal input')).toEqual(-1);
  });

  it('returns the cost of item A', () => {
    expect(checkout('A')).toEqual(50);
  });

  it('returns the cost of item B', () => {
    expect(checkout('B')).toEqual(30);
  });

  it('returns the cost of item C', () => {
    expect(checkout('C')).toEqual(20);
  });

  it('returns the cost of item D', () => {
    expect(checkout('D')).toEqual(15);
  });

  it('returns the total cost of multiple items', () => {
    expect(checkout('ABCD')).toEqual(115);
  });
});
