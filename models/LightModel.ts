import BoardConfig from '../BoardConfig';
// non va bene perché si parla di un valore emesso continuamente
// mentre la promise non fa questo lavoro
// \
const lightMeasure = () => {
  return new Promise((resolve, reject) => {
    Light.on('change', () => {
      resolve(this.level);
    });
  });
};
