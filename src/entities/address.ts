import { Model, ModelCtor, Optional, Sequelize } from 'sequelize';
import { schema, options } from '../schemas/address';

interface IAddressAttributes {
  id: number;
  zip: string;
  createdAt: Date;
  updatedAt: Date;
}

type IAddressCreationAttributes = Optional<IAddressAttributes, 'id' | 'createdAt' | 'updatedAt'>;

/*
interface AddressInstance
  extends Model<IAddressAttributes, IAddressCreationAttributes>,
    IAddressAttributes {}

export default (sequelize: Sequelize): ModelCtor<AddressInstance> => {
  const Address = sequelize.define<AddressInstance>('Address', schema, options);
  return Address;
};
*/

export class Address
  extends Model<IAddressAttributes, IAddressCreationAttributes>
  implements IAddressAttributes {
  public id!: number;
  public zip!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static attach(sequelize: Sequelize): void {
    Address.init(schema, {
      tableName: 'address',
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
