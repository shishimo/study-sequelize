import { QueryInterface } from 'sequelize';
import { schema, options } from '../schemas/user';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('user', schema, options);
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('user');
  }
};
