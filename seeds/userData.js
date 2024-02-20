const { User } = require('../models');

const userdata = 
  {
    username: 'Paul',
    email: 'paulie3@gmail.com',
    password: 'Password123',
  };


const seedUser = () => User.create(userdata);

module.exports = seedUser;