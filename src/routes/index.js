const express = require('express');
const { index, admin, userLogin } = require('../controllers/indexController');
const userAddValidator = require('../validations/userAddValidator');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();

/* GET home page. */
router
    .get('/', index)
    .get('/admin', adminCheck, admin)
    .post('/admin',userAddValidator, userLogin)

module.exports = router;
