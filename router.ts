'use strict';
import * as express from 'express';
import LedController from './controllers/LedController';
const Router = express.Router();

Router.get('/', LedController.StrobeOn)
  .get('/off', LedController.StrobeOff)
  .get('/fade', LedController.FadeLed);

export default Router;
