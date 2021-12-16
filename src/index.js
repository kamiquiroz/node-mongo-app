const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userAPI=require('./routes/users');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URL)
.then( () => console.log('Conection successful'))
.catch( (error) => console.log(error));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use('/api', userAPI);

app.get('/', (req, resp) => {
    resp.send("Wecome to my first API");
});

app.listen(PORT, () => console.log("Connection"));
