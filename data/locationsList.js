const mongoose = require('mongoose');
const db = require('../models');

const locationsList = [
    {
        state: 'Virginia',
        city: [ 'Fairfax','Lorton','Fredricksburg']
    }
];
    // {
    //     city: 'Fairfax',
    //     state: 'VA'
    // },
    // {
    //     city: 'Lorton',
    //     state: 'VA'
    // },
    // {
    //     city: 'Fredricksburg',
    //     state: 'VA'
    // },
    // {
    //     city: 'Baltimore',
    //     state: 'MD'
    // },
    // {
    //     city: 'Annapolis',
    //     state: 'MD'
    // },
    // {
    //     city: 'Fredrick',
    //     state: 'MD'
    // },
    // {
    //     city: 'Philadelphia',
    //     state: 'PA'
    // },
    // {
    //     city: 'Pittsburg',
    //     state: 'PA'
    // },
    // {
    //     city: 'Scranton',
    //     state: 'PA'
    // },
    // {
    //     city: 'Newark',
    //     state: 'DE'
    // },
    // {
    //     city: 'Dover',
    //     state: 'DE'
    // },
    // {
    //     city: 'Wilmington',
    //     state: 'DE'
    // },
    // {
    //     city: 'Charlotte',
    //     state: 'NC'
    // },
    // {
    //     city: 'Raleigh',
    //     state: 'NC'
    // },
    // {
    //     city: 'Asheville',
    //     state: 'NC'
    // },
// ];

db.Location.create(locationsList, (err, createdLocations) => {
    if(err) console.log(err);

    console.log(createdLocations);
    process.exit();
})

//module.exports = locationsList;