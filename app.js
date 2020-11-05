const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/' , (req, res) => {
    res.send('We are on home');
});

app.get('/posts' , (req, res) => {
    res.send('We are on posts');
});


mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser : true},
    () => 
    console.log('connected to DB!')
);
//CONNECT TO DB

app.listen(3000);