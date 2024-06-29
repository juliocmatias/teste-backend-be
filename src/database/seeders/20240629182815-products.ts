import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Product 1',
        quantity: 10,
        price: 100.00,
        deleted: false,
      },
      {
        name: 'Product 2',
        quantity: 20,
        price: 200.00,
        deleted: false,
      },
      {
        name: 'Product 3',
        quantity: 30,
        price: 300.00,
        deleted: false,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
};
