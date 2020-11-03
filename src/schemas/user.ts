import { fn, DataTypes } from 'sequelize';

export const schema = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    field: 'name',
    defaultValue: ''
  },
  addressId: {
    type: DataTypes.INTEGER.UNSIGNED,
    field: 'address_id',
    defaultValue: 0
  },
  createdAt: {
    defaultValue: fn('NOW'),
    field: 'created_at',
    type: DataTypes.DATE
  },
  updatedAt: {
    defaultValue: fn('NOW'),
    field: 'updated_at',
    type: DataTypes.DATE
  }
};

export const options = {
  tableName: 'user',
  charset: 'utf8',
  collate: 'utf8_bin'
};
