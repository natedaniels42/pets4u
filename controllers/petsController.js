const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const upload = multer({dest: '../public/images'});

router.get('/new', (req, res) => {
    res.render('pets/new');
});

router.post('/', (req, res) => {
    db.Pet.create(req.body, (err, newPet) => {
        if (err) console.log(err);
        
        console.log(newPet);
        res.redirect('/pets')
    })
})
    

module.exports = router;