const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
const locationsController = require('./controllers/locationsController');
const petsController = require('./controllers/petsController');
const authController = require('./controllers/authController');
const multer = require('multer');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

//Storage for Multer image upload
const storage = multer.diskStorage({
    destination: './public/images/', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

//Upload for Multer image upload
const upload = multer({
    storage: storage,
    limits: {filesize: 1000000},
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

//Helper function to check file types for Multer image upload
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

//Set EJS for views
app.set('view engine', 'ejs');

//
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 20
    }
}))

//Method override for put and delete
app.use(methodOverride('_method'));

//Connection for static files
app.use(express.static(`${__dirname}/public`));

//Body parser
app.use(express.urlencoded({extended: false}));

//Controllers connections
app.use('/locations', locationsController);
app.use('/pets', petsController);
app.use('/', authController);

//Home page
app.get('/', (req, res) => {
    res.render('index')
});

//404 page
app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})

app.listen(PORT, () => console.log(`API is running on ${PORT}`));