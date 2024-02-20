const { Comment } = require('../models');

// Starting data for the comment table
const commentdata = [
  {
    body: 'This story was so great',
    user_id: 1,
    story_id: 1,
  },
  {
    body: "This wasn't believable to me, Cersei would never fight for any side but her own.",
    user_id: 1,
    story_id: 2,
  },
  {
    body: "Loved this story. Wish it happened in the show!",
    user_id: 1,
    story_id: 1,
  },
  {
    body: "Cersei seems so great in this.",
    user_id: 1,
    story_id: 2,
  },

];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;