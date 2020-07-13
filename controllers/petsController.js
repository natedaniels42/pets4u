const express = require('express');
const router = express.Router();
const db = require('../models');

const PETS = require('../data/petsList');

//to put in server
// app.use('/pets', petsController);


router.get('/:id/edit', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/edit', {
            pet: foundPet
        })
    })
});

router.put('/:id', (req, res) => {
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