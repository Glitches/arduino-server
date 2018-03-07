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
  .get('/off', (req, res) => {
    // Turn off the strobe
    led.stop();
    res.status(200).end();
  })
  .get('/fade', (req, res) => {
    // Light fader
    led.fade({
      easing: 'outSine',
      duration: 1000,
      cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
      keyFrames: [0, 250, 25, 150, 100, 125],
      onstop: function() {
        console.log('Animation stopped');
      }
    });
    res.status(200).end();
  })
  .listen(Port, () => console.log('Server running on port ', Port));
