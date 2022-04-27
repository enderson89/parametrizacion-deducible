const { casos } = require('../data/procesarDeducibles.data');
const { procesarDeducibles } = require('./procesador');

for (const caso of casos) {
  const { input, output } = caso;
  const resultado = procesarDeducibles(input);
  console.log('validación', JSON.stringify(resultado) === JSON.stringify(output));
}
