const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');


app.listen(port, () => console.log(`app listening on port ${port}!`));