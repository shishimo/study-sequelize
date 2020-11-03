import config from 'config';
import { Sequelize } from 'sequelize';
import { Address, User } from './entities';

const sequelize = new Sequelize(
  config.get('db.database'),
  config.get('db.username'),
  config.get('db.password'),
  {
    host: config.get('db.host'),
    dialect: config.get('db.dialect'),
    logging: process.env.NODE_ENV === 'production' ? false : console.log
  }
);

Address.attach(sequelize);
User.attach(sequelize);

User.belongsTo(Address, { targetKey: "id", as: 'address' });
Address.hasOne(User, { sourceKey: "id", as: 'address' });

export { sequelize, Sequelize, Address, User };
