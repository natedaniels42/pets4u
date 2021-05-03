const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();


//Transporter for sending emails through Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//Stores images uploaded with Multer
const storage = multer.diskStorage({
    destination: 'public/images', 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

//Multer upload
const upload = multer({
    storage: storage,
    limits: {filesize: 1000000},
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

//Helper function for checking file type of uploaded image files for Multer
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

//Pet get route for new pets page
router.get('/new', (req, res) => {
    let warning = '';
    if (!req.session.currentUser) return res.redirect('/login');
    db.Location.find({}, (err, allLocations) => {
        if (err) console.log(err);

        res.render('pets/new', {
            location: allLocations
        });

    })
});

//Pets post route for new pet
router.post('/', (req, res) => {
    if (!req.session.currentUser) return res.redirect('/login');
    upload(req, res, (err) => {
        if (err) console.log(err);
        
        //handling of new pet form neutered checkbox
        if (req.body.neutered === 'on') {
            req.body.neutered = true;
        } else {
            req.body.neutered = false;
        }
       
        db.Pet.create(req.body, (err, newPet) => {
            if (err)console.log(err);
            
            //Attach downloaded image file to new pet
            if (req.file) {
                newPet.image = `/images/${req.file.filename}`;

            } else {
                newPet.image = 'https://i.ebayimg.com/images/g/nkQAAOSw84ZcTbvu/s-l300.png';
            }
            newPet.save((err, savedPet)=> {

                res.redirect('/pets')
            })
        })
    })
})


//Pets get route for all pets    
router.get('/', (req, res) => {
    db.Pet.find({}, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/index', {
            pet: foundPet
        });
    });
});

//Pet adoption confirmation post route
router.post('/confirm', (req, res) => {
    db.Adoption.create(req.body, (err, createdAdoption) => {
        if (err) console.log(err);
                
        console.log(req.body);
        
        //Send confirmation email using Nodemailer
        let mailOptions = {
            from: 'pets4uapp42@gmail.com',
            to: createdAdoption.email,
            subject: 'Pet Adoption',
            text: `Thank you for your interest in adopting ${createdAdoption.adoptPet.name}. Please fill out the attached file and return it to: pets4uapp42@gmail.com.  Once we have a chance to review your application we will contact you to set up an appointment to come to the shelter.` 
        };

        transporter.sendMail(mailOptions, (err, sentEmail) => {
            if (err) console.log(err);

            res.render('pets/confirm', {
                adoption: createdAdoption
            })
        });
    })
})

//Pets get individual pet route
router.get('/:id', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/show', {
            pet: foundPet
        })
    })
})

//Pets get route for adoption page
router.get('/:id/adopt', (req, res) => {
    db.Pet.findById(req.params.id, (err, foundPet) => {
        if (err) console.log(err);

        res.render('pets/adopt', {
            pet: foundPet,
        });
    })
})

//Pets get route for edit page
router.get('/:id/edit', (req, res) => {
    if (!req.session.currentUser) return res.redirect('/login');
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

//Pets put route for edit page
router.put('/:id', (req, res) => {
    if (!req.session.currentUser) return res.redirect('/login');
    if (req.body.neutered === 'on') {
        req.body.neutered = true;
    } else {
        req.body.neutered = false;
    }
    console.log(req.body);
    db.Pet.findByIdAndUpdate(req.params.id, req.body, (err, updatedPet) => {
        if (err) console.log(err);

        res.redirect('/pets/' + req.params.id);
    })
})

//Pets delete route
router.delete('/:id', (req, res) => {
    if (!req.session.currentUser) return res.redirect('/login');
    db.Pet.findByIdAndDelete(req.params.id, (err, deletedPet) => {
        if (err) console.log(err);

        res.redirect('/pets');
    })
})

module.exports = router;