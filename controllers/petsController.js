const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const path = require('path');
//const upload = multer({dest: '../public/images'});
const nodemailer = require('nodemailer');
require('dotenv').config();



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



const storage = multer.diskStorage({
    destination: 'public/images', 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
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


router.get('/new', (req, res) => {
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        res.render('pets/new', {
            location: allLocations
        });

    })
});

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) console.log(err);
        
        if (req.body.neutered === 'on') {
            req.body.neutered = 'neutered';
        } else {
            req.body.neutered = 'not neutered';
        }
       
        db.Pet.create(req.body, (err, newPet) => {
            if (err)console.log(err);
            
            console.log(req.file);
            newPet.image = `images/${req.file.filename}`;
            console.log(newPet);
            res.redirect('/pets')
        })
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
        let mailOptions = {
            from: 'pets4uapp42@gmail.com',
            to: createdAdoption.email,
            subject: 'Pet Adoption',
            text: `Thank you for your interest in adopting ${createdAdoption.adoptPet}. Please fill out the attached file and return it to: pets4uapp42@gmail.com.  Once we have a chance to review your application we will contact you to set up an appointment to come to the shelter.` 
        };

        transporter.sendMail(mailOptions, (err, sentEmail) => {
            if (err) console.log(err);

            console.log(sentEmail);
            res.render('pets/confirm', {
                adoption: createdAdoption
            })
        });
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