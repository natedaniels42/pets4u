const express = require('express');
const router = express.Router();
const db = require('../models');

const LOCATIONS = require('../data/locationsList');

//Current location '/locations'

//Routes-------------------------------

//Single Location
router.get('/:index', (req, res) => {
    console.log(req.params.index);
    res.render('locations/show', {
        location: LOCATIONS[req.params.index]
    });
});

//All Locations
router.get('/', (req, res) => {
    res.render('locations/index', {
        locations: LOCATIONS,
    })
});


module.exports = router;