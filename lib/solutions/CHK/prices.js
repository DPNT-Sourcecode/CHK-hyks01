module.exports = [
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
  },
  {
      sku: 'F',
      price: 10,
      offers: [
          { multiBuy: 2, freeProduct: 'F' }
      ]
  },
  {
      sku: 'G',
      price: 20
  }
];
