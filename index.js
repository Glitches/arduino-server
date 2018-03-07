require('dotenv');
const express = require('express');
const app = express();
const five = require('johnny-five');
const board = new five.Board();
const Port = process.env.PORT || 5000;
let led;

board.on('ready', () => {
  // Create an Led on pin 13
  led = new five.Led(13);
});

app
  .get('/', async (req, res) => {
    // Strobe the pin on/off, defaults to 100ms phases
    const strobe = new Promise((resolve, reject) => {
      try {
        led.strobe();
        resolve(200);
      } catch (e) {
        reject(400);
      }
    });
    try {
      const val = await strobe;
      res.sendStatus(val);
    } catch (e) {
      console.log(e);
    }
  })
  .get('/off', async (req, res) => {
    // Turn off the strobe
    const stop = new Promise((resolve, reject) => {
      try {
        led.stop();
        resolve(200);
      } catch (e) {
        reject(400);
      }
    });
    try {
      const val = await stop;
      res.status(val).end();
    } catch (e) {
      console.log(e);
    }
  })
  .get('/fade', async (req, res) => {
    const { time } = req.query;
    // Light fader
    console.log(time);
    const fade = new Promise((resolve, reject) => {
      try {
        const ledNew = new five.Led(11);
        ledNew.fadeIn();
        setTimeout(() => {
          ledNew.fadeOut();
        }, time);
      } catch (e) {
        console.log('Fade error: ' + e);
        reject(400);
      }
      resolve(200);
    });
    try {
      const val = await fade;
      res.sendStatus(val);
    } catch (e) {
      console.log(e);
    }
  })
  .listen(Port, () => console.log('Server running on port ', Port));
