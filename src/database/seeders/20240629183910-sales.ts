import { QueryInterface, QueryTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    const clients: { id: number }[] = await queryInterface.sequelize.query('SELECT id FROM clients WHERE tax_id = "12345678901"', { type: QueryTypes.SELECT });
    const products: { id: number }[] = await queryInterface.sequelize.query('SELECT id FROM products', { type: QueryTypes.SELECT });

    if (clients.length === 0 || products.length === 0) {
      throw new Error('Clients or Products not found.');
    }

    const clientId = clients[0].id;

    await queryInterface.bulkInsert('sales', [
      {
        client_id: clientId,
        product_id: products[0].id,
        quantity: 1,
        price: 100.00,
        total_price: 100.00,
        date: new Date(),
      },
      {
        client_id: clientId,
        product_id: products[1].id,
        quantity: 2,
        price: 200.00,
        total_price: 400.00,
        date: new Date(),
      },
      {
        client_id: clientId,
        product_id: products[2].id,
        quantity: 3,
        price: 300.00,
        total_price: 900.00,
        date: new Date(),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sales', {});
  },
};
