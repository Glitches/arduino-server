'use strict';
import LedModel from '../models/LedModel';

const StrobeOn = async (req, res) => {
  try {
    const val = await LedModel.strobeOn();
    res.sendStatus(val);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const StrobeOff = async (req, res) => {
  try {
    const val = await LedModel.strobeOff();
    res.status(val).end();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const FadeLed = async (req, res) => {
  const { time } = req.query;
  //  console.log(time);
  try {
    const val = await LedModel.fadeLed(time);
    res.sendStatus(val);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export default {
  StrobeOn: StrobeOn,
  StrobeOff: StrobeOff,
  FadeLed: FadeLed
};
