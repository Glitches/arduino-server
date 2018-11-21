import BoardConfig from '../BoardConfig';

let led;
let fadingLed;

BoardConfig.Board.on('ready', () => {
  // Create an Led on pin 13
  led = new BoardConfig.Five.Led(13);
  fadingLed = new BoardConfig.Five.Led(11);
});

// Strobe the pin on/off, defaults to 100ms phases
const strobeOn = () => {
  return new Promise((resolve, reject) => {
    try {
      led.strobe();
    } catch (e) {
      console.log(BoardConfig);
      reject(400);
    }
    resolve(200);
  });
};

// Turn off the strobe
const strobeOff = () => {
  return new Promise((resolve, reject) => {
    try {
      led.stop();
    } catch (e) {
      reject(400);
    }
    resolve(200);
  });
};

// Light fader
const fadeLed = time => {
  return new Promise((resolve, reject) => {
    try {
      fadingLed.fadeIn();
      setTimeout(() => {
        fadingLed.fadeOut();
      }, time || 1000);
    } catch (e) {
      console.log('Fade error: ' + e);
      reject(400);
    }
    resolve(200);
  });
};

export default {
  strobeOn: strobeOn,
  strobeOff: strobeOff,
  fadeLed: fadeLed
};
