const sum = require('../../../lib/solutions/SUM/sum');

describe('sum', () => {
    test('return sum of two positive integers', () => {
        expect(sum(1, 2)).toEqual(3);
        expect(sum(45, 67)).toEqual(112);
    });
})
