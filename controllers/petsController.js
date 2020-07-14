const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const upload = multer({dest: '../public/images'});
/*
const storage = multer.diskStorage({
    destination: '../public/images/', 
    
})

const upload = multer({
    storage: storage,
    limits: {filesize: 1000000},
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('myImage');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimtype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}
*/

router.get('/new', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        res.render('pets/new', {
            location: allLocations
        });

    })
});

router.post('/', upload.single('image'), (req, res) => {
    if (req.body.neutered === 'on') {
        req.body.neutered = 'neutered';
    } else {
        req.body.neutered = 'not neutered';
    }
    console.log(req.body);
    console.log(req.file);
    db.Pet.create(req.body, (err, newPet) => {
        if (err)console.log(err);
            
        newPet.image = req.file.path;
        console.log(newPet);
        res.redirect('/pets')
        })
    })


    
router.get('/', (req, res) => {
    db.Pet.find({}, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/index', {
            pet: foundPet
        });
    });
});

router.post('/confirm', (req, res) => {
    db.Adoption.create(req.body, (err, createdAdoption) => {
        if (err) console.log(err);
                
        console.log(req.body);
        res.render('pets/confirm');
    })
})


router.get('/:id', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/show', {
            pet: foundPet
        })
    })
})


router.get('/:id/adopt', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);


        res.render('pets/adopt', {
            pet: foundPet,
        });
    })
})

router.get('/:id/edit', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        db.Pet.findById(req.params.id, (err, foundPet) => {
            if (err) console.log(err);
    
            res.render('pets/edit', {
                pet: foundPet,
                location: allLocations
            })
        })
    })
});

router.put('/:id', (req, res) => {
    if (req.body.neutered === 'on') {
        req.body.neutered = 'neutered';
    } else {
        req.body.neutered = 'not neutered';
    }
    console.log(req.body);
    db.Pet.findByIdAndUpdate(req.params.id, req.body, (err, updatedPet) => {
        if (err) console.log(err);

        console.log(req.params.id);
        console.log(updatedPet);
        res.redirect('/pets/' + req.params.id);
    })
})

router.delete('/:id', (req, res) => {
    db.Pet.findByIdAndDelete(req.params.id, (err, deletedPet) => {
        if (err) console.log(err);

        res.redirect('/pets');
    })
})

module.exports = router;