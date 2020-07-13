const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');
const upload = multer({dest: '../public/images'});

router.get('/new', (req, res) => {
    res.render('pets/new');
});



module.exports = router;