'use strict';

const priceList = require('./prices');

module.exports = function (skus) {
    let total = 0;
    let skuList = skus.split('');

    const distinct = skuList.filter((val, i, arr) => {
        return arr.indexOf(val) === i;
    });

    skuList = _removeFreeItems(skuList, distinct);

    try {
        distinct.forEach((sku) => {
            const count = skuList.filter((v) => sku === v).length;
            const item = _getItem(sku);
            const itemCost = _getCost(item, count);
            total = total + itemCost;
        });
    } catch (e) {
        return -1;
    }

    return total;
};

function _getItem(sku) {
    const item = priceList.find((item) => {
        return item.sku === sku;
    });

    if (!item) throw new Error('no item exists');
    return item;
}

function _getCost(item, count) {
    const subTotal = item.price * count;

    if (!item.offers) return subTotal;
    return subTotal - _getDiscount(item.offers, count);
}

function _getDiscount(offers, count) {
    let discount = 0;

    offers
        .filter((offer) => offer.discount)
        .sort((a, b) => b.multiBuy - a.multiBuy)
        .forEach((offer) => {
            const deals = Math.floor(count / offer.multiBuy);
            count = count - (deals * offer.multiBuy);
            discount = discount + (deals * offer.discount);
        })

    return discount;
}

function _removeFreeItems(skus, distinctList) {
    distinctList.forEach((sku) => {
        let item;

        try {
            item = _getItem(sku);
        } catch (e) {
            return;
        }

        let count = skus.filter((v) => sku === v).length;
        if (!item.offers) return;

        item.offers
            .filter((offer) => offer.freeProduct)
            .forEach((offer) => {
                let min = offer.multiBuy;
                if (offer.freeProduct === item.sku) {
                    min = offer.multiBuy + 1;
                }
                while (count >= min) {
                    const index = skus.indexOf(offer.freeProduct);
                    if (index != -1) skus.splice(index, 1);
                    count -= offer.multiBuy;
                }
            })
    });
    return skus;
}

function _getGroupBuyTotal(skus) {
    const groupBuys = ['S', 'T', 'X', 'Y', 'Z'];
    const groupBuyList = priceList.filter((item) => {
        return groupBuys.includes(item.sku)
    });

    const filteredList = skus.filter((sku) => {
        return groupBuys.includes(sku);
    })
    const count = groupBuyList.length;
    const remainder = count % 3;

    while (remainder > 0) {
        groupBuyList.forEach((sku) => {
            const index =
        })
    }

    const total = count * Math.floor(count / 3);
}
