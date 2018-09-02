'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total = 0;
    const skuList = skus.split('');

    skuList.forEach((sku) => {
        const item = getItem(sku);
        total = total + item.price;
    });

    return total;
};

function getItem(sku) {
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
    ];

    return priceList.find((item) => {
        return item.sku === sku;
    });
}
