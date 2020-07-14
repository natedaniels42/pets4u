const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/pets4us';

mongoose.connect(connectionString, {
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
    Adoption: require('./Adoption')
};