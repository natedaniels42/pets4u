const express = require('express');
const router = express.Router();
const db = require('../models');

//const LOCATIONS = require('../data/locationsList');

//Current location '/locations'

//Routes-------------------------------

//Single Location
router.get('/:id', (req, res) => {
    db.Location.findOne({city: req.params.id}, (err, foundLocation) => {
        if (err) console.log(err);
        
        console.log(foundLocation);
        res.render('locations/show', {
            location: foundLocation.state,
            locationid: req.params.id
        });
    });
});

//All Locations
router.get('/', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
       if(err) console.log(err); 
       
       res.render('locations/index', {
           locations: allLocations,
        })
    })
});


module.exports = router;