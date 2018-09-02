const one = require('../../../lib/solutions/TST/one');
// noinspection JSUnusedLocalSymbols
const two = require('../../../lib/solutions/TST/two');

test('show one', () => {
    expect(one()).toEqual(1);
});

test('show two', () => {
    expect(two()).toEqual(2);
});
