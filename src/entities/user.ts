import { Model, ModelCtor, Optional, Sequelize } from 'sequelize';
import { schema, options } from '../schemas/user';
import { Address } from './address';

interface IUserAttributes {
  id: number;
  name: string;
  addressId: number;
  createdAt: Date;
  updatedAt: Date;
}

type IUserCreationAttributes = Optional<IUserAttributes, 'id' | 'createdAt' | 'updatedAt'>;

/*
interface UserInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes {}

export default (sequelize: Sequelize): ModelCtor<UserInstance> => {
  const User = sequelize.define<UserInstance>('User', schema, options);
  return User;
};
*/

export class User
  extends Model<IUserAttributes, IUserCreationAttributes>
  implements IUserAttributes {
  public id!: number;
  public name!: string;
  public addressId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly address?: Address;

  public static attach(sequelize: Sequelize): void {
    User.init(schema, {
      tableName: 'user',
      sequelize
    });
  }

  /*
  public static associate(): void {
    console.log('assciate');
  }

  public static associations: {
    //projects: Association<User, Project>;
  };
  */
}
