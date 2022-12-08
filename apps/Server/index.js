const mongoose = require('mongoose');
const express = require('express');
const app = express();
let port = 3000;
var mongoDB = 'mongodb://127.0.0.1/charity';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('Connected to Mongo database')});
app.use(express.json())
app.use(express.json())
const userRoute = require('./routes/User')
app.use('/api/user', userRoute)
app.listen(port, () => {
  console.log(`server is listening on Port: ${port}`);
})