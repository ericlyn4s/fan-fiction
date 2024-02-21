const router = require('express').Router();
const { Story, User, Comment } = require('../models');

// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbStoryData = await Story.findAll({
      include: [
        {
          model: User, 
          attributes: ['username'],
        },
      ],
    });

    const stories = dbStoryData.map((story) =>
      story.get({ plain: true })
    );

    res.render('homepage', {
      stories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one story
router.get('/story/:id', withAuth, async (req, res) => {
  try {
    const dbStoryData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['body', 'createdAt'],
          include: [User],
        },
        {
          model: User,
          attributes: ['username']
        },
      ],
    })

    const story = dbStoryData.get({ plain: true });

    res.render('story', { 
      story,
      loggedIn: req.session.loggedIn,
    });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // LOGIN route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
