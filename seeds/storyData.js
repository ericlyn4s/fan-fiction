const { Story } = require('../models');

// Starting data for the Story table
const storydata = [
  {
    title: 'Tyrion ascends the throne',
    description: "Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king.",
    content: "Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king. Tyrion, after surviving the events of Game of Thrones, is given the opportunity to become king.",
    series: "Game of Thrones",
    user_id: 1,
  },
  {
    title: 'Cersei joins the Starks',
    description: "Cersei Lannister comes to her senses and joins the Stark effort.",
    content: "Cersei Lannister comes to her senses and joins the Stark effort.",
    series: "Game of Thrones",
    user_id: 1,
  },
];

const seedStory = () => Story.bulkCreate(storydata);

module.exports = seedStory;
