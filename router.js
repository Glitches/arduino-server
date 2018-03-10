'use strict';
const express = require('express');
const ledController = require('./controllers/ledController');
const router = express.Router();

router
  .get('/', ledController.StrobeOn)
  .get('/off', ledController.StrobeOff)
  .get('/fade', ledController.FadeLed);

module.exports = router;
