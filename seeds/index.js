const sequelize = require('../config/connection');
const seedStory= require('./storyData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedStory();

  await seedComment();

  process.exit(0);
};

seedAll();
