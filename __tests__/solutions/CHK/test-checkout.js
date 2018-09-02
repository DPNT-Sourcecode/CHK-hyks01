const checkout = require('../../../lib/solutions/CHK/checkout');

describe('checkout', () => {
  it('returns -1 for any illegal input', () => {
    expect(checkout('illegal input')).toEqual(-1);
  });

  describe('prices', () => {
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

    it('returns the cost of item E', () => {
      expect(checkout('E')).toEqual(40);
    });

    it('returns the cost of item F', () => {
      expect(checkout('F')).toEqual(10);
    });

    it('returns the cost of item G', () => {
      expect(checkout('G')).toEqual(20);
    });

    it('returns the cost of item H', () => {
      expect(checkout('H')).toEqual(10);
    });

    it('returns the cost of item I', () => {
      expect(checkout('I')).toEqual(35);
    });

    it('returns the cost of item J', () => {
      expect(checkout('J')).toEqual(60);
    });

    it('returns the cost of item K', () => {
      expect(checkout('K')).toEqual(80);
    });

    it('returns the cost of item L', () => {
      expect(checkout('L')).toEqual(90);
    });

    it('returns the cost of item M', () => {
      expect(checkout('M')).toEqual(15);
    });

    it('returns the cost of item N', () => {
      expect(checkout('N')).toEqual(40);
    });

    it('returns the cost of item O', () => {
      expect(checkout('O')).toEqual(10);
    });

    it('returns the cost of item P', () => {
      expect(checkout('P')).toEqual(50);
    });

    it('returns the cost of item Q', () => {
      expect(checkout('Q')).toEqual(30);
    });

    it('returns the cost of item R', () => {
      expect(checkout('R')).toEqual(50);
    });
  });

  describe('discounts', () => {
    it('returns the total cost of multiple items', () => {
      expect(checkout('ABCD')).toEqual(115);
    });

    it('returns the total for items without offers', () => {
      expect(checkout('CDD')).toEqual(50);
    });

    it('gives a discount for special offers on A', () => {
      expect(checkout('AAAA')).toEqual(180);
      expect(checkout('AAAAAA')).toEqual(250);
    });

    it('gives a discount for special offers on B', () => {
      expect(checkout('BBB')).toEqual(75);
    });

    it('gives a discount for special offers on H', () => {
      expect(checkout('HHHHHH')).toEqual(55);
      expect(checkout('HHHHHHHHHHH')).toEqual(90);
    });

    it('gives a discount for special offers on K', () => {
      expect(checkout('KKK')).toEqual(230);
    });

    it('gives a discount for special offers on P', () => {
      expect(checkout('PPPPPPP')).toEqual(300);
    });

    it('gives a discount for special offers on Q', () => {
      expect(checkout('QQQ')).toEqual(80);
    });
  });

  describe('free products', () => {
    it('gives a free "B" for every two "Es"', () => {
      expect(checkout('EEB')).toEqual(80);
    });

    it('gives a free "F" for every two "Fs"', () => {
      expect(checkout('FFF')).toEqual(20);
    });

    it('gives a free "M" for every three "Ns"', () => {
      expect(checkout('NNNM')).toEqual(120);
    });

    it('gives a discount for multiple special offers', () => {
      expect(checkout('AAAABBBD')).toEqual(270);
    });

    it('does not give any free items not in the cart', () => {
      expect(checkout('EE')).toEqual(80);
      expect(checkout('FF')).toEqual(20);
    });
  });
});
