'use strict';
const ledModel = require('../models/ledModel');
const StrobeOn = async (req, res) => {
  try {
    const val = await ledModel.strobeOn();
    res.sendStatus(val);
  } catch (e) {
    console.log(e);
  }
};

const StrobeOff = async (req, res) => {
  try {
    const val = await ledModel.strobeOff();
    res.status(val).end();
  } catch (e) {
    console.log(e);
  }
};

const FadeLed = async (req, res) => {
  const { time } = req.query;
  console.log(time);
  try {
    const val = await ledModel.fadeLed(time);
    res.sendStatus(val);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  StrobeOn: StrobeOn,
  StrobeOff: StrobeOff,
  FadeLed: FadeLed
};
