require('dotenv').config();

const { connect, User } = require('./models');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const generateRandomPassword = async () => {
  const randomString = Math.random().toString(36).slice(-8);
  return await bcrypt.hash(randomString, 10);
};


(async () => {
  await connect();

  const usersData = [
    {
      phone: '11999990001',
      email: 'batman@example.com',
      name: 'Bruce "Batman" Wayne',
      password: await generateRandomPassword(),
      image: 'https://i.imgur.com/B1iPW91.png', 
    },
    {
      phone: '21999990002',
      email: 'superman@example.com',
      name: 'Clark "Superman" Kent',
      password: await generateRandomPassword(),
      image: 'https://i.imgur.com/0F8QyvV.png', 
    },
    {
      phone: '31999990003',
      email: 'wonderwoman@example.com',
      name: 'Diana "Wonder Woman" Prince',
      password: await generateRandomPassword(),
      image: 'https://i.imgur.com/yNoOGJY.png', 
    },
    {
      phone: '41999990004',
      email: 'spiderman@example.com',
      name: 'Peter "Spider-Man" Parker',
      password: await generateRandomPassword(),
      image: 'https://i.imgur.com/jVnK1JM.png', 
    },
    {
      phone: '51999990005',
      email: 'ironman@example.com',
      name: 'Tony "Iron Man" Stark',
      password: await generateRandomPassword(),
      image: 'https://i.imgur.com/u9tJ9G1.png', 
    },
    {
        phone: '51999990005',
        email: 'caio@gmail.com',
        name: 'caio "Iron Man"',
        password: await bcrypt.hash('123456', 10),
        image: '', 
      },
  ];

  for (const userData of usersData) {
    await User.findOneAndUpdate(
      {
        phone: userData.phone,
        email: userData.email,
      },
      userData,
      {
        upsert: true,
      }
    );
  }

  console.log(`${usersData.length} heróis inseridos/atualizados com sucesso!`);

  await mongoose.disconnect();
})();