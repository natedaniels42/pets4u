const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
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