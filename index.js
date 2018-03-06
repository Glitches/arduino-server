const express = require('express');
const app = express();
const five = require("johnny-five");
const board = new five.Board();

const port = process.env || 5000 ;

board.on("ready", () => {
  // Create an Led on pin 13
  var led = new five.Led(13);
});

app
  .get('/', (req,res) => {
  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
  })
  .listen(port, () => console.log(`Server running on port ${port}`));
