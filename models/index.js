const User = require('./User');
const Story = require('./Story');
const Comment = require('./Comment');

// POST belongs to USER through user_id
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// COMMENT belongs to USER through user_id
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// since we are going to be retrieving the post and then its associated comments, we would use Post.hasMany
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };