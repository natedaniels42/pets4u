const mongoose = require('mongoose');
const Pet = require('./Pet');

const adoptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adoptPet: {
        type: String,
        required: true
    }
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;

