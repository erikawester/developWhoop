const express = require('express');
const router = express.Router();
const { welcome, authorize, callback } = require('../controllers/whoopController');

router.get('/', welcome); 
router.get('/authorize', authorize);
router.get('/callback', callback);

module.exports = router;
