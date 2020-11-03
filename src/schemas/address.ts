import { fn, DataTypes } from 'sequelize';

export const schema = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  zip: {
    type: DataTypes.STRING(7),
    allowNull: false
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
  tableName: 'address',
  charset: 'utf8',
  collate: 'utf8_bin',
};
