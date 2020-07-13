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

router.get('/', (req, res) => {
    db.Pet.find({}, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/index', {
            pet: foundPet
        });
    });
});

router.get('/:id', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/show', {
            pet: foundPet
        })
    })
})

module.exports = router;