// import and configure dotenv, import other lobraries and modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

// initializes a new Express application
const app = express();

// middelwares
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Create route
app.use('/api', router);

// Start the server on port;
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`LISTENING ON PORT http://localhost:${port}/`);
});
