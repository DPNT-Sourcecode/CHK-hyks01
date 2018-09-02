'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const priceList = [
        {
            sku: 'A',
            price: 50
        },
        {
            sku: 'B',
            price: 30
        },
        {
            sku: 'C',
            price: 20
        },
        {
            sku: 'D',
            price: 15
        }
    ]

    const item = priceList.find((item) => {
        return item.sku === skus;
    });

    return item && item.price || -1;
};
