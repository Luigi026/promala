const express = require('express');
const { index, admin, userLogin } = require('../controllers/indexController');
const userAddValidator = require('../validations/userAddValidator');
const router = express.Router();

/* GET home page. */
router
    .get('/', index)
    .get('/admin', admin)
    .post('/admin',userAddValidator, userLogin)

module.exports = router;
