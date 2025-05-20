function calcTabelaIMC(imc) {
  const validationIMCNormal = imc >= 18.5 && imc <= 24.9
  const validationIMCSobrepeso = imc >= 25 && imc <= 29.9
  const validationIMCObesidade1 = imc > 30 && imc <= 34.9
  const validationIMCObesidade2 = imc > 35 && imc <= 39.9

  return imc < 18.5
    ? 'Thinness'
    : validationIMCNormal
    ? 'Normal'
    : validationIMCSobrepeso
    ? 'Overweight'
    : validationIMCObesidade1
    ? 'Degree obesity I'
    : validationIMCObesidade2
    ? 'Degree obesity II'
    : imc > 40
    ? 'Degree obesity III'
    : ''
}
