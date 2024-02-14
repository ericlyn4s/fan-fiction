const sequelize = require('../config/connection');
const seedStory= require('./storyData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedStory();

  process.exit(0);
};

seedAll();