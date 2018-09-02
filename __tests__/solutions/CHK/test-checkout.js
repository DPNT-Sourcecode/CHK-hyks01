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

  it('provides a discount for special offers on A', () => {
    expect(checkout('AAAA')).toEqual(180);
    expect(checkout('AAAAAA')).toEqual(250);
  });

  it('provides a discount for special offers on B', () => {
    expect(checkout('BBB')).toEqual(75);
  });

  it('provides a free "B" for every two "Es"', () => {
    expect(checkout('EEB')).toEqual(80);
  });

  it('provides a discount for multiple special offers', () => {
    expect(checkout('AAAABBBD')).toEqual(270);
  });

  it('returns the total for items without offers', () => {
    expect(checkout('CDD')).toEqual(50);
  });

  it('provides a free "F" for every two "Fs"', () => {
    expect(checkout('FFF')).toEqual(20);
  });

  it('does not give any free items not in the cart', () => {
    expect(checkout('EE')).toEqual(80);
    expect(checkout('FF')).toEqual(20);
  })
});
