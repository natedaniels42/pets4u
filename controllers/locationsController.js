const express = require('express');
const router = express.Router();
const db = require('../models');

//Locations Get Route for specific location
router.get('/:id', (req, res) => {
    db.Location.findOne({city: req.params.id}, (err, foundLocation) => {
        if (err) console.log(err);
        
        db.Pet.find({location: `${req.params.id}, ${foundLocation.state}`}, (err, foundPets) => {
            if (err) console.log(err);
       
            if(foundPets.length) {
                foundLocation.pets.splice(0, foundLocation.pets.length);
                for (let i = 0; i < foundPets.length; i++) {
                    if (!foundLocation.pets.includes(foundPets[i]._id)) {
                        
                        foundLocation.pets.push(foundPets[i]);
                    }
                }
                foundLocation.save((err, foundLocation) => {
                    if (err) console.log(err);
                    
                    console.log(foundLocation);
                })
            }
            res.render('locations/show', {
                location: foundLocation.state,
                locationid: req.params.id,
                pet: foundPets
            })
        })
    })
})

//Locations get all locations
router.get('/', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
       if(err) console.log(err); 
       
       res.render('locations/index', {
           locations: allLocations,
        })
    })
})


module.exports = router;