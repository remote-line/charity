const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
let port = 4000;
var mongoDB = 'mongodb://127.0.0.1/charity';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var cors = require('cors');
app.use(cors());
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('Connected to Mongo database')});
app.use(express.json())

mongoose.Promise = global.Promise;
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

const userRoute = require('./routes/User')
const authRoute = require('./routes/auth')
 const clientRoute = require('./routes/client')
 const profileRoute = require('./routes/Profile')
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/client', clientRoute)
app.use('/api/profile', profileRoute)

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
app.listen(port, () => {
  console.log(`server is listening on Port: ${port}`);
})