const express = require('express');
const router = express.Router();
const { welcome, authorize, callback } = require('../controllers/authController');
const metricsController = require('../controllers/metricsController');

router.get('/', welcome); 
router.get('/authorize', authorize);
router.get('/callback', callback, (req, res) => {
    return res.status(200).json({ accessToken: res.locals.access_token});
});
router.get('/metrics', metricsController.getMetrics); 


module.exports = router;
