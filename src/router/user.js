const express = require('express');
const { login, getUser } = require('../controller/user');
const middleware = require('../helper/middleware');
const router = express.Router();


router.post('/login', login)
router.use(middleware)
router.get('/getUser', getUser)

module.exports = router