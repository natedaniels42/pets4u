const mongoose = require('mongoose');
const db = require('../models');

const locationsList = [
    {
        state: 'Virginia',
        city: [ 'Fairfax','Lorton','Fredricksburg']
    },
    {
        state: 'Maryland',
        city: ['Baltimore', 'Annapolis', 'Frederick']
    },
    {
        state: 'Pennsylvania',
        city: ['Philadephia', 'Pittsburgh', 'Scranton']
    },
    {
        state: 'Delaware',
        city: ['Newark', 'Dover', 'Wilmington']
    },
    {
        state: 'North Carolina',
        city: ['Charlotte', 'Raleigh', 'Asheville']
    }
];
   
    
    
    
db.Location.deleteMany({}, (err, deletedLocations) => {
    if(err) console.log(err);
    
    db.Location.create(locationsList, (err, createdLocations) => {
        if(err) console.log(err);
    
        console.log(createdLocations);
        process.exit();
    })
})    


//module.exports = locationsList;