const express = require('express');

const router = express.Router();

//login page

router.get('/login', (req, res) => res.render('login'));


//register page

router.get('/register', (req, res) => res.render('register'));

//Register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;

    let errors = [];

    //check required field
    if(!name || !email || !password || !password2) {
       errors.push({ msg: "Please fill all fields" });
    }

    //check passwords match
    if(password !== password2 ) {
        errors.push({ msg: "Passwords do not match" })
    }

    //check pass lenght
    if(password.lenght < 6) {
        errors.push({ msg: "password must at least be 6 characters "})
    }

    if(errors.length > 0) {
       res.render('register', {
        errors,
        name,
        email,
        password,
        password2
       });
    } else {
        res.send('pass');
    }
})





module.exports = router;