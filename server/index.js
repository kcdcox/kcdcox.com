const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Findwords
const matches = require('./routes/api/matches');
app.use('/api/matches', matches);

//Relativator
const relativator = require('./routes/api/relativator');
app.use('/api/relativator', relativator);


//For Deployment Only
//app.use(express.static(__dirname + '/public/'));
//app.get(/.*/, (req, res) => res.sendFile(__direname + '/public/index.html'));

app.listen(5003, () => console.log("Server listening on port 5003"));



