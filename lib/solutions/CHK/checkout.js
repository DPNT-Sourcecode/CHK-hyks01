'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total = 0;
    const skuList = skus.split('');

    try {
        distinct = skuList.filter((val, i, arr) => {
            return arr.indexOf(val) === i;
        });

        distinct.forEach((sku) => {
            const count = skuList.filter((v) => sku === v).length;
            const item = getItem(sku);

            if (!item) throw new Error('illegal input');
            const itemCost = calculateCost(item, count);
            total = total + itemCost;
        });
    } catch (e) {
        return -1;
    }

    return total;
};

function getItem(sku) {
    const priceList = [
        {
            sku: 'A',
            price: 50,
            multiBuy: 3,
            discount: 20
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

function calculateCost(item, count) {
    const multiBuys = count / item.multiBuy;
    const discount = multiBuys * item.discount;
    const subTotal = item.price * count;

    return subTotal - discount;
}
