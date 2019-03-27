const express = require('express');
//const mongodb = require('mongodb');
//const nodemailer = require('nodemailer');

const router = express.Router();
const logic = require('./logic');
//let transporter = nodemailer.createTransport(transport);

// Find Words
router.get('/', async (req, res) => {
    const words = logic.findWords(req.query.letters);
    res.send(await words);
});

// Send Email
// router.post('/', async (req, res) => {
//     const message = logic.findWords(req.query.letters);
//     res.send(await message);
// });


module.exports = router;