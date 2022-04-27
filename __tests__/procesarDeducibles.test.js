const { casos } = require('../data/procesarDeducibles.data');
const { procesarDeducibles } = require('../src/procesador');

describe('procesar deducibles', () => {
  test('validar casos del gherkin', () => {
    casos.forEach((caso) => {
      const { input, output } = caso;
      const resultado = procesarDeducibles(input);
      expect(resultado).toEqual(output);
    });
  });
});
