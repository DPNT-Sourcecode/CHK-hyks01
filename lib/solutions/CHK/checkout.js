'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let total = 0;
    let skuList = skus.split('');

    const distinct = skuList.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
    });

    skuList = removeFreeItems(skuList, distinct);

    try {
        distinct.forEach((sku) => {
            const count = skuList.filter((v) => sku === v).length;
            const item = getItem(sku);

            if (!item) throw new Error('illegal input');
            const itemCost = getCost(item, count);
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
        },
        {
            sku: 'E',
            price: 40,
            offers: [
                { multiBuy: 2, freeProduct: 'B' }
            ]
        }
    ];

    return priceList.find((item) => {
        return item.sku === sku;
    });
}

function getCost(item, count) {
    const subTotal = item.price * count;

    if (!item.offers) return subTotal;
    return subTotal - getDiscount(item.offers, count);
}

function getDiscount(offers, count) {
    let discount = 0;

    offers
        .sort((a, b) => b.multiBuy - a.multiBuy)
        .forEach((offer) => {
            const deals = Math.floor(count / offer.multiBuy);
            count = count - (deals * offer.multiBuy);
            discount = discount + (deals * offer.discount);
        })

    return discount;
}

function removeFreeItems(skus, distinctList) {
    distinctList.forEach((sku) => {
        const item = getItem(sku);
        const count = skus.filter((v) => sku === v).length;

        if (!item.offers) return;

        item.offers
            .filter((offer) => offer.freeProduct)
            .forEach((offer) => {
                while (count >= offer.multiBuy) {
                    const index = skus.indexOf(offer.freeProduct);
                    skus = skus.splice(index, 1)
                    count -= offer.multiBuy;
                }
            })
    });

    return skus;
}
