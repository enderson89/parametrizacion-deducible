const TALLER_REGEX = /taller[\w\s%.,á-ú]+(US\$|S\/.)\s*\d+(.\d+)?|(marca[\w\s.,:á-ú]+)*\d+(.\d+)?%[\w\s.,á-ú]+(US\$|S\/.)\s*\d+[\w\s.,á-ú(]+taller[\w \t.,á-ú)]+(\n|$)/gi;

module.exports = {
  procesarDeducibles(input) {
    const monedaDolares = 'USD';
    const monedaSoles = 'PEN';
    const tipoPorDefecto = 'NO TIPO';
    const marcaPorDefecto = 'NO MARCA';
    const tallerPorDefecto = 'NO TALLER';
    const deduciblePorDefecto = 0;
    const copagoPorDefecto = 0;
  
    let text = input.payload.text;
    const txtTalleres = text.match(TALLER_REGEX)||[];
    
    const payload = [];
    for (const txtTaller of txtTalleres) {
      const txtDeducible = txtTaller.match(/\d+(.\d+)?%/g)[0];
      console.log('txtDeducible', txtDeducible);
      const deducible = txtDeducible ? parseInt(txtDeducible.replace('%', '')) : deduciblePorDefecto;
  
      const txtCopago = txtTaller.match(/(US\$|S\/.)\s*\d+(.\d+)?/gi)[0];
      console.log('txtCopago', txtCopago);
      const copago = txtCopago ? parseInt(txtCopago.replace(/(US\$|S\/.)\s*/gi, '')) : copagoPorDefecto;
  
      const txtTipo = txtTaller.match(/\bmultimarca\b/gi);
      console.log('txtTipo', txtTipo);
      const tipo = txtTipo ? txtTipo[0][0].toUpperCase() + txtTipo[0].slice(1) : tipoPorDefecto;
  
      let taller = txtTaller.match(/(otro(s)? )?taller[\wá-ú\t, ]+(\d+(.\d+)?%|\n|$|\)|\.)/gi)[0];
      console.log('taller1', taller);
      const palabraFiltroEncontrada = taller.search(/preferencia|especial|afiliado|otro/gi);
      taller = palabraFiltroEncontrada == -1 ? taller.replace(/(\s*taller(es)?\s+|,\s+\d+(.\d+)?%)/gi, '').trimEnd() : tallerPorDefecto;
      console.log('taller2', taller);
  
      const txtMarca = txtTaller.match(/marca\s+[\wá-ú, ]+:/gi);
      console.log('txtMarca', txtMarca);
      const marca = txtMarca ? txtMarca[0].replace(/(marca\s*|:)/gi, '').toUpperCase() : marcaPorDefecto;
  
      const txtMoneda = txtTaller.match(/US\$|S\/./gi);
      console.log('txtMoneda', txtMoneda);
      const moneda = txtMoneda ? txtMoneda[0].replace(/US\$/gi, monedaDolares).replace(/S\/./gi, monedaSoles).toUpperCase() : monedaDolares;
  
      const deducibleParametrizado = {
        deducible,
        copago,
        moneda,
        tipo,
        marca,
        taller
      }
      payload.push(deducibleParametrizado);
    }
    return { payload };
  }
};