const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
const locationsController = require('./controllers/locationsController');
const petsController = require('./controllers/petsController');
const authController = require('./controllers/authController');
const multer = require('multer');
//const upload = multer({dest: './public/images'});
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const storage = multer.diskStorage({
    destination: './public/images/', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + Path2D.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    limits: {filesize: 1000000},
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

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


app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,//do you want to resave each request
    saveUninitialized: false,
    cookie: { //how long to stay logged on
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2//2 weeks
    }
}))

app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended: false}));

app.use('/locations', locationsController);
app.use('/pets', petsController);
app.use('/', authController);

//Routes--------------------


//Home
app.get('/', (req, res) => {
    res.render('index')
});


//404 Error
app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})

//Server Listener
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));