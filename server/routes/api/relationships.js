const express = require('express');
const router = express.Router();

const logic = require('../../functions/Relativator');

//Relativator
router.get('/', async (req, res) => {
    const relation = logic.getRelationship(req.query.wordOne, req.query.wordTwo);
    res.send(await relation);
});
module.exports = router; 