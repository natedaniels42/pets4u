const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
const locationsController = require('./controllers/locationsController');
const petsController = require('./controllers/petsController');
const multer = require('multer');
const upload = multer({dest: 'public/images'});

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended: false}));

app.use('/locations', locationsController);
app.use('/pets', petsController);


//Routes--------------------

//Home
app.get('/', (req, res) => {
    res.render('index')
});

//Locations Index Page
app.get('/locations', (req, res) => {
    res.render('locations/index');
});

//Pets Index Page
app.get('/pets', (req, res) => {
    res.render('pets/index');
});

//Pet Show Page
app.get('/pets/:index', (req, res) => {
    res.render('pets/new');
});

//404 Error
app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})

//Server Listener
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));