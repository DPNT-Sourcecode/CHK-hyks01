'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const priceList = [
        {
            sku: 'A',
            price: 50
        }
    ]

    if (skus === 'A') return 50;
    return -1;
};
