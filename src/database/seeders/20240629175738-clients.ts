import { QueryInterface, QueryTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('clients', [
      {
        name: 'John Doe',
        tax_id: '12345678901',
      },
    ], {});

    const clients: { id: number }[] = await queryInterface.sequelize.query('SELECT id FROM clients WHERE tax_id = "12345678901"', { type: QueryTypes.SELECT });

    const clientId = clients[0].id;

    if (clients.length === 0) {
      throw new Error('Client not found.');
    }

    await queryInterface.bulkInsert('addresses', [
      {
        street: '123 Main St',
        address_number: 123,
        city: 'Sample City',
        zip: 12345678,
        country: 'Sample Country',
        client_id: clientId,
      },
    ], {});

    await queryInterface.bulkInsert('phones', [
      {
        phone: '123-456-7890',
        client_id: clientId,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('phones', {});
    await queryInterface.bulkDelete('addresses', {});
    await queryInterface.bulkDelete('clients', {});
  },
};
