const router = require('express').Router();
const { Story, User } = require('../models');

// GET all stories for homepage
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
