'use strict';
require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const Port = process.env.PORT || 5000;

app
  .use(cors())
  .use(router)
  .listen(Port, () => console.log('Server running on port ', Port));
