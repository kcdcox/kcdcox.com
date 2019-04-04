const express = require('express');

const router = express.Router();
const logic = require('../../logic/Relativator');

//Relativator
router.get('/products', async (req, res) => {
    console.log(req.query);
    res.send({
        products: []
    });
});

module.exports = router;