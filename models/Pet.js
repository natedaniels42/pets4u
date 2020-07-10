const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    },
    breedSpecies: {
            type: String,
            required: true
    },
    neutered: Boolean,
    description: {
        type: String,
        required: true
    },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;




