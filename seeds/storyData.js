const { Story } = require('../models');

const storydata = [
  {
    name: 'Blossoming Apricot',
    content: 'LedyX',
    created_date: 'March 30, 2018',
  },
];

const seedStories = () => Story.bulkCreate(storydata);

module.exports = seedStories;
