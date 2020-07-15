const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const methodOverride = require('method-override');
const locationsController = require('./controllers/locationsController');
const petsController = require('./controllers/petsController');
const multer = require('multer');
//const upload = multer({dest: './public/images'});
const path = require('path');

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


//404 Error
app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})
//test
//Server Listener
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));