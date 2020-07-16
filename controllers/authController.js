const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/login', (req, res) => {
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return console.log(err);

        if (!foundUser) {
            res.render('register');
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) console.log(err);

            if (isMatch) {
                console.log(req.session);
                const currentUser = {
                    _id: foundUser._id,
                    name: foundUser.name,
                    email: foundUser.email
                }
                    
                req.session.currentUser = currentUser;
                res.redirect('/');
            } else {
                res.send('invalid info');
            }
        })
    })
})

router.post('/register', (req, res) => {
    
    //Check for existing user
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if(err) return console.log(err);
        //User exists
        if (foundUser) return console.log('User already exists');
        //Turn text password into safer hash
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return console.log(err);
            
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) console.log(err);
                
                const { name, email, password } = req.body;
                
                const newUser = {
                    name,
                    email,
                    password: hash, //Very Important!!!!
                };
                        
                db.User.create(newUser, (err, createdUser) => {
                    console.log(createdUser);
                    if (err)console.log(err);

                    res.redirect('/login');
                })
            })
        })
    })
})

module.exports = router;