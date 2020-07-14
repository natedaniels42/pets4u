const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const upload = multer({dest: '../public/images'});

router.get('/new', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        res.render('pets/new', {
            location: allLocations
        });

    })
});

router.post('/', (req, res) => {
    if(req.body.neutered === 'on') {
        req.body.neutered = 'neutered';
    } else {
        req.body.neutered = 'not neutered';
    }
    console.log(req.body);
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

router.get('/confirm', (req, res) => {
    
    res.render('pets/confirm');
})

router.get('/:id', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/show', {
            pet: foundPet
        })
    })
})


router.get('/:id/adopt', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/adopt', {
            pet: foundPet,
        });
    })
})

router.get('/:id/edit', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        db.Pet.findById(req.params.id, (err, foundPet) => {
            if (err) console.log(err);
    
            res.render('pets/edit', {
                pet: foundPet,
                location: allLocations
            })
        })
    })
});

router.put('/:id', (req, res) => {
    if (req.body.neutered === 'on') {
        req.body.neutered = 'neutered';
    } else {
        req.body.neutered = 'not neutered';
    }
    
    db.Pet.findByIdAndUpdate(req.params.id, req.body, (err, updatedPet) => {
        if (err) console.log(err);

        console.log(req.params.id);
        console.log(updatedPet);
        res.redirect('/pets/' + req.params.id);
    })
})

router.delete('/:id', (req, res) => {
    db.Pet.findByIdAndDelete(req.params.id, (err, deletedPet) => {
        if (err) console.log(err);

        res.redirect('/pets');
    })
})
//Something
module.exports = router;