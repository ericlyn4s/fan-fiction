const { User } = require('../models');

const userdata = 
  {
    username: 'henry',
    email: 'henry3@gmail.com',
    password: 'Password123',
  };


const seedUser = () => User.create(userdata);

module.exports = seedUser;