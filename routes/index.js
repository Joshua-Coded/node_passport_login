const express = require('express');

const router = express.Router();

//welcome page
router.get('/', (req, res) => res.render('welcome'));

//dashboard
router.get('/dashboard', (req, res) =>
 res.render('dashboard', {
        user: req.user
})
);

module.exports = router;