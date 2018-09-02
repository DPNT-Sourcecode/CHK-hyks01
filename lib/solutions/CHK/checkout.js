'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total = 0;
    const skuList = skus.split('');
    const priceList = [
        {
            sku: 'A',
            price: 50,
            multiBuy: 3,
            discount: 20
        },
        {
            sku: 'B',
            price: 30,
            multiBuy: 2,
            discount: 15
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

    try {
        distinct = skuList.filter((val, i, arr) => {
            return arr.indexOf(val) === i;
        });

        distinct.forEach((sku) => {
            const count = skuList.filter((v) => sku === v).length;
            const item = priceList.find((item) => {
                return item.sku === sku;
            });

            if (!item) throw new Error('illegal input');

            const subTotal = item.price * count;
            const multiBuys = Math.floor(count / item.multiBuy);
            const discount = multiBuys * item.discount || 0;
            const itemCost = subTotal - discount;

            total = total + itemCost;
        });
    } catch (e) {
        return -1;
    }

    return total;
};
