const mongoose = require('mongoose');
const Location = require('./Location');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        ageNumber: {
            type: Number,
            required: true
        },
        ageLength: {
            type: String,
            required: true
        }
    },
    petType: {
        type: String,
        required: true, 
    },
    breedSpecies: {
            type: String,
            required: true,
    },
    neutered: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;




