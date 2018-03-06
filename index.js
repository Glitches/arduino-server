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
  .get('/', (req, res) => {
    // Strobe the pin on/off, defaults to 100ms phases
    led.strobe();
    res.send('Hello World!');
  })
  .get('/off', (req, res) => {
    // Turn off the strobe
    led.stop();
    res.status(200).end();
  })
  .listen(Port, () => console.log('Server running on port ', Port));
