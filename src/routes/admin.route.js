const express = require('express');
const adminController = require('../controllers/admin.controller');
const router = express.Router();

router.get('/website_new_Transactions', adminController.website_new_Transactions);
router.get('/createindex', adminController.createindex);

router.post('/test', adminController.test);

module.exports = router;