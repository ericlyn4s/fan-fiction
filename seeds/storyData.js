const { Story } = require('../models');

const storydata = [
  {
    title: 'Tyrion Ascends the Throne',
    content: 'We"re all doomed',
    series: 'Game of Thrones',
    creator_id: 1,
  },
  {
    title: 'John Snow Rebuilds',
    content: 'Here"s some sample data',
    series: 'Game of Thrones',
    creator_id: 1,
  },
];

const seedStory = () => Story.bulkCreate(storydata);

module.exports = seedStory;
