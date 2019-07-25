const express = require('express');
const router = express.Router();

const logic = require('../../functions/Findwords');

// Find Words
router.get('/', async (req, res) => {
    const words = logic.findWords(req.query.letters);
    res.send(await words);
});

module.exports = router; 