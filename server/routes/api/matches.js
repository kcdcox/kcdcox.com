const express = require('express');
//const mongodb = require('mongodb');

const router = express.Router();
const logic = require('../../logic/Findwords');

// Find Words
router.get('/', async (req, res) => {
    const words = logic.findWords(req.query.letters);
    res.send(await words);
});

module.exports = router; 