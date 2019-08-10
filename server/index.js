const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Findwords Routes
const matches = require('./routes/api/matches');
app.use('/api/matches', matches);

//Relativator Routes
const relativator = require('./routes/api/relationships');
app.use('/api/relationships', relativator); 

//For Deployment Only
app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(5003, () => console.log("Server listening on port 5003"));



