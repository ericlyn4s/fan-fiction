const User = require('./User');
const Story = require('./Story');
const Comment = require('./Comment');

// Story belongs to USER through user_id
Story.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// COMMENT belongs to USER through user_id
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// since we are going to be retrieving the Story and then its associated comments, we would use Story.hasMany
Story.hasMany(Comment, {
  foreignKey: 'story_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Story, Comment };
