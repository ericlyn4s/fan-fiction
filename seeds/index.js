const sequelize = require('../config/connection');
const seedStories = require('./storyData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedStories();

  process.exit(0);
};

seedAll();
