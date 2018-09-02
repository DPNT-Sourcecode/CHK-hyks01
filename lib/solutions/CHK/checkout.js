'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total = 0;
    const skuList = skus.split('');

    try {
        const distinct = skuList.filter((val, i, arr) => {
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
            offers: [
                { multiBuy: 3, discount: 20 },
                { multiBuy: 5, discount: 50 }
            ]
        },
        {
            sku: 'B',
            price: 30,
            offers: [
                { multiBuy: 2, discount: 15 }
            ]
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
    const subTotal = item.price * count;

    if (!item.offers) return subTotal;

    let discount = 0;
    let remainder = count;

    item.offers.sort((a, b) => {
        return b.multiBuy - a.multiBuy;
    }).forEach((offer) => {
        const deals = Math.floor(remainder / offer.multiBuy);
        remainder = remainder - (deals * offer.multiBuy);
        discount = discount + (deals * offer.discount);
    })

    return subTotal - discount;
}
