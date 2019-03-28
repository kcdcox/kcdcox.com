const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const matches = require('./routes/api/matches');
app.use('/api/matches', matches);

//Handle Production
if (process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname + '/public/'));
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__direname + '/public/index.html'));
}

const port = process.env.PORT || 5003;

app.listen(port, () =>
    console.log(`Server started on port ${port}`));



