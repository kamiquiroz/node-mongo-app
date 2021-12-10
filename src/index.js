const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const userAPI=require('./routes/users');

mongoose.connect(process.env.MONGODB_URL)
.then( () => console.log('Conection successful'))
.catch( (error) => console.log(error));

app.use(express.json());
app.use('/api', userAPI);

app.get('/', (req, resp) => {
    resp.send("Wecome to my first API");
});

app.listen(PORT, () => console.log("Connection"));
