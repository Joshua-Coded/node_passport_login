const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

// welcome page
router.get('/', (req, res) => {
    res.render("welcome");
})

// dashboard page
router.get('/dashboard', ensureAuthenticated,(req, res) => {
    res.render("dashboard", {
        user: req.user
    });
})


module.exports = router;