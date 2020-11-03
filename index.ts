import { sequelize, Sequelize, User, Address } from './src';

async function create() {
  const newAddress = await Address.create({
    zip: "2140038"
  });
  console.log(newAddress.id, newAddress.zip);

  const newUser = await User.create({
    name: "Jonny",
    addressId: newAddress.id
  });
  console.log(newUser.id, newUser.name);
}

async function read() {
  const users = await User.findAll({
    include: {
      association: 'address',
      where: {
        zip: '2140038'
      }
    }
  });
  console.log('Users:', JSON.stringify(users, null, 2));

  const addresses = await Address.findAll({
  });
  console.log('Addresses:', JSON.stringify(addresses, null, 2));
}

async function main() {
  //await create();
  await read();
}

main();
