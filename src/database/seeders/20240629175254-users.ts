import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user@example.com',
        password: bcrypt.hashSync('password', 10),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
