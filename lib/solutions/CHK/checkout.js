'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const priceList = [
        {
            sku: 'A',
            price: 50
        }
    ]

    const item = priceList.find((item) => {
        return item.sku === skus;
    });

    return item.price || -1;
};
