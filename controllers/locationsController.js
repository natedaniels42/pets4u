const express = require('express');
const router = express.Router();
const db = require('../models');

const LOCATIONS = require('../data/locationsList');

//to put in server
// app.use('/locations', locationsController);

//Current location '/locations'

//Routes-------------------------------

//Single Location
router.get('/:index', (req, res) => {
    res.render('show', {
        locations: LOCATIONS[req.params.index]
    });
});

//All Locations
router.get('/', (req, res) => {
    res.render('index', {
        locations: LOCATIONS,
    })
});




module.exports = router;