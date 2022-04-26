const casos = [
  {
    input: {
      "payload": {
        "text": `(No Inclueye I.G.V.)
        Por evento 10% del monto a indemnizar, mínimo US$200.00
        Excepto para:
        Robo Parcial 10% del monto a indemnizar, mínimo US$150.00
        Siniestros atendidos en talleres preferenciales 10% del monto a indemnizar, mínimo US$150.00
        Robo de accesorios Musicales 10% del monto a indemnizar, mínimo 150.00
        Responsabilidad civil 10% del monto a indemnizar, mínimo 150.00
        Robo total solo se aseguran con GPS obligatorio hasta el segundo año de antigüedad, sin coaseguro. Tercer año, coaseguro 80/20`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 10,
          "copago": 150,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `*Los siniestros, serán atendidos únicamente en la relación de talleres especiales descritos en la cláusula  VEHA07
        20% del monto indemnizable, mínimo US$ 200 
        20% del monto indemnizable para pérdida total`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 20,
          "copago": 200,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `* Por Evento 15% del monto del siniestro, mínimo US$ 150.00 en Talleres Afiliados Multimarca
        * Por Evento 15% del monto del siniestro, mínimo US$ 250.00 en Talleres Afiliados`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 15,
          "copago": 150,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 15,
          "copago": 250,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `- Ausencia de control: 25.00% del monto indemnizar, mínimo US$ 500.00 (Talleres Afiliados).
        - Ausencia de control: 25.00% del monto indemnizar, mínimo US$ 300.00 (Talleres Afiliados Multimarca).
        -Pérdida total por ausencia de control: 25.00% del monto a i`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 25,
          "copago": 500,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 25,
          "copago": 300,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `. 20% del monto a indemnizar, mínimo US$ 250.00, para todo y cada evento, en talleres afiliados
        20% del monto a indemnizar, mínimo US$ 200.00, para todo y cada evento, en talleres afiliados multimarca
        Pérdida Total, Incendio, Robo Total:  20% del monto del siniestro
        Conductor varón menor  de 25 años, 25% del monto del siniestro mínimo US$ 300, para todo y cada evento
        Rotura de lunas, solo para reposición de lunas nacionales sin deducible
        Vías no autorizadas 25% del monto a indemnizar, mínimo US$ 300.00, para todo y cada evento`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 20,
          "copago": 250,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 20,
          "copago": 200,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `10% del monto del siniestro, minimo US$ 500.00 en Talleres Nissan Maquinarias	
        10% del monto del siniestro, minimo US$ 700.00 en Otros Talleres 	
        En caso de discrepancia prevalece el mayor. No incluye I.G.V.`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 10,
          "copago": 500,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "Nissan Maquinarias"
        },
        {
          "deducible": 10,
          "copago": 700,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `AUSENCIA DE CONTROL EN TALLERES JAPAN AUTOS, 22% del DEL MONTO DEL SINIESTRO, Mínimo de US$500.00. AUSENCIA DE CONTROL`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 22,
          "copago": 500,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "JAPAN AUTOS"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `Por evento 15.00% del monto a indemnizar, mínimo US$ 150.00, en talleres afiliados
        Siniestros atendidos en red de talleres afiliados multimarca  10.00% del monto a indemnizar, mínimo US$ 150.00
        Robo Parcial 15% del monto a indemnizar, mínimo US$ 150.00
        Accesorios musicales 10.00% del monto a indemnizar, mínimo US$ 150.00
        Hyundai Tucson, Santa Fe: coaseguro por Robo Total (nuevos y hasta 2 años de antigüedad) 20%. Si el vehículo cuenta con GPS, se excluirá el coaseguro.
        Por evento, Marca Mercedes Benz, BMW, Audi, Porsche Cayenne: 15% del monto a indemnizar, mínimo US$ 200.00 en talleres afiliados
        Por evento, Marca Mercedes Benz, BMW, Audi, Porsche Cayenne: 10% del monto a indemnizar, mínimo US$ 150.00 en talleres afiliados multimarca
        Marca Mercedes Benz, BMW, Audi, Porsche Cayenne
        Mayores a US$ 75,000 hasta US$ 100,000: 15% del monto a indemnizar, mínimo US$ 1,500 para daños por hueco o daños por despiste contra sardineles por llantas Runflat
        Menores a US$ 75,000: 15% del monto a indemnizar, mínimo US$ 800.00 para daños por hueco o daños por despiste contra sardineles por llantas Runflat
        Reposición de lunas nacionales, sin deducible`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 15,
          "copago": 150,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 10,
          "copago": 150,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 15,
          "copago": 200,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "MERCEDES BENZ, BMW, AUDI, PORSCHE CAYENNE",
          "taller": "NO TALLER"
        },
        {
          "deducible": 10,
          "copago": 150,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "MERCEDES BENZ, BMW, AUDI, PORSCHE CAYENNE",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `Por evento 15.00% del monto a indemnizar, mínimo US$ 150.00, en talleres afiliados
        Siniestros atendidos en red de talleres afiliados multimarca  10.00% del monto a indemnizar, mínimo US$ 150.00
        Robo Parcial 15% del monto a indemnizar, mínimo US$ 150.00
        Accesorios musicales 10.00% del monto a indemnizar, mínimo US$ 150.00
        Conductor varón menor  de 25 años, 20% del monto del siniestro mínimo US$ 300, para todo evento (incluido pérdida total)
        Todo autos y SW mayores a US$ 50,000, Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total.
        Toda Camioneta Rural/SUV mayor a US$ 50,000, Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total
        Toyota Rav4, Land Cruiser, Land Crusier Prado, FJ Cruiser, Fortuner, Nissan Patrol, Pathfinder, Suzuki Grand Nomade, Honda CRV nuevas y hasta 2 años de antiguedad con Sistema de Rastreo Vehicular Obligatorio para cobertura de robo total (instalado y debidamente operativo con los mantenimientos solicitados por el proveedor).
        Reposición de lunas nacionales, sin deducible
        Por evento, Marca Mercedes Benz, BMW, Audi: 20% del monto a indemnizar, mínimo US$ 200.00 en talleres afiliados
        Por evento, Marca Mercedes Benz, BMW, Audi: 15% del monto a indemnizar, mínimo US$ 150.00 en talleres afiliados multimarca.`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 15,
          "copago": 150,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 10,
          "copago": 150,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 20,
          "copago": 200,
          "moneda": "USD",
          "tipo": "NO TIPO",
          "marca": "MERCEDES BENZ, BMW, AUDI",
          "taller": "NO TALLER"
        },
        {
          "deducible": 15,
          "copago": 150,
          "moneda": "USD",
          "tipo": "Multimarca",
          "marca": "MERCEDES BENZ, BMW, AUDI",
          "taller": "NO TALLER"
        }
      ]
    }
  },
  {
    input: {
      "payload": {
        "text": `Por evento 15.00% del monto a indemnizar, mínimo S/. 560.00, en talleres afiliados
        Excepto para:		
        Siniestros atendidos en red de talleres afiliados multimarca 10.00% del monto a indemnizar, mínimo S/. 420.00
        Robo Parcial 15% del monto a indemnizar, mínimo S/. 420.00
        Accesorios musicales 10.00% del monto a indemnizar, mínimo S/. 420.00
        Conductor varón menor  de 25 años, 20% del monto del siniestro mínimo S/. 840.00, para todo evento (incluído pédida total)
        Toyota Rav4, Land Cruiser, Land Crusier Prado, FJ Cruiser, Fortuner, Nissan Patrol, Pathfinder, Suzuki Grand Nomade, Honda CRV nuevas y hasta 2 años con Sistema de Rastreo Vehicular Obligatorio para cobertura de robo total.
        Camionetas Rurales/SUV mayores a S/. 140,000 Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total.
        Por evento, Marca Mercedes Benz, BMW, Audi: 20% del monto a indemnizar, mínimo S/. 560.00 en talleres afiliados.
        Por evento, Marca Mercedes Benz, BMW, Audi: 15% del monto a indemnizar, mínimo S/. 420.00 en talleres afiliados multimarca.
        Para Volcaduras incluyendo Xtrail, Pathfinder, Patrol, rurales y suv: 20%, monto del siniestro, mínimo S/. 420.00+ IGV
        Imprudencia culposa 20% del siniestro mínimo S/. 840.00`
      }
    },
    output: {
      "payload": [
        {
          "deducible": 15,
          "copago": 560,
          "moneda": "PEN",
          "tipo": "NO TIPO",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 10,
          "copago": 420,
          "moneda": "PEN",
          "tipo": "Multimarca",
          "marca": "NO MARCA",
          "taller": "NO TALLER"
        },
        {
          "deducible": 20,
          "copago": 560,
          "moneda": "PEN",
          "tipo": "NO TIPO",
          "marca": "MERCEDES BENZ, BMW, AUDI",
          "taller": "NO TALLER"
        },
        {
          "deducible": 15,
          "copago": 420,
          "moneda": "PEN",
          "tipo": "Multimarca",
          "marca": "MERCEDES BENZ, BMW, AUDI",
          "taller": "NO TALLER"
        }
      ]
    }
  }
]
const tallerRegex = /taller[\w\s%.,á-ú]+(US\$|S\/.)\s*\d+(.\d+)?|(marca[\w\s.,:á-ú]+)*\d+(.\d+)?%[\w\s.,á-ú]+(US\$|S\/.)\s*\d+[\w\s.,á-ú(]+taller[\w \t.,á-ú)]+(\n|$)/gi;
const procesarDeducibles = (input) => {
  const monedaDolares = 'USD';
  const monedaSoles = 'PEN';
  const tipoPorDefecto = 'NO TIPO';
  const marcaPorDefecto = 'NO MARCA';
  const tallerPorDefecto = 'NO TALLER';
  const deduciblePorDefecto = 0;
  const copagoPorDefecto = 0;

  let text = input.payload.text;
  const txtTalleres = text.match(tallerRegex)||[];
  
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

    const infoDeducible = {
      deducible,
      copago,
      moneda,
      tipo,
      marca,
      taller
    }
    payload.push(infoDeducible);
  }
  return { payload };
}
for (const caso of casos) {
  const { input, output } = caso;
  const resultado = procesarDeducibles(input);
  console.log('validación', JSON.stringify(resultado) === JSON.stringify(output));
}
