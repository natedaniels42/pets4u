const mongoose = require('mongoose');
const Pet = require('./Pet');

const locationSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    city: [{
        type: String,
        required: true
        }],
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }],
    })


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;