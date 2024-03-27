const express = require('express');
const router = express.Router();
const { authorize, callback } = require('../controllers/authController');

router.get('/', (req, res) => {
  res.send('Welcome to the Whoop OAuth Demo!');
});

router.get('/authorize', authorize);
router.get('/callback', callback);

module.exports = router;
