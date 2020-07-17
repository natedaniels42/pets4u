const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pets4us';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Pet: require('./Pet'),
    Location: require('./Location'),
    Adoption: require('./Adoption'),
    User: require('./User'),
};