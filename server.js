const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
//const locationsController = require('/controllers/locationsController');
//const petsController = require('/controllers/petsController');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended: false}));

//app.use('/locations', locationsController);
//app.use('/pets', petsController);

app.get('/', (req, res) => {
    res.render('index')
});

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));