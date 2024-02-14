<<<<<<< HEAD
const postSource = require('./post');
const userSource = require('./user');
=======
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> 3e720b5a60fa80924a2ccd3338dcffdab734de13
