const { casos } = require('../data/procesarDeducibles.data');
const { procesarDeducibles } = require('./procesador');

let i = 0;
for (const caso of casos) {
  const { input, output } = caso;
  const resultado = procesarDeducibles(input);
  i++;
  console.log(`validación caso ${i}:`, JSON.stringify(resultado) === JSON.stringify(output));
}
