'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total;


    const skuList = skus.split('');

    skuList.forEach((sku) => {
        total = total + getPrice(sku);
    });

    return total;
};

function getPrice(sku) {
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
        return item.sku === sku;
    });

    return item.price;
}
