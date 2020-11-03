import { QueryInterface } from 'sequelize';
import { schema, options } from '../schemas/address';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('address', schema, options);
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('address');
  }
};
