const router = require('express').Router();
const isAuthorized = require('../config/authCheck');

router.get('/', (req, res) => {
    res.send('You have been logged in')
})

module.exports = router