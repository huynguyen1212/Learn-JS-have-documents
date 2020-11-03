function POW(a) {
  return Math.pow(a, 2);
}

function SQRT(a) {
  return Math.sqrt(a);
}

function Result() {
  if (calculator.display.value.includes("POW")) {
    let a = calculator.display.value;
    let b = a.split("P");
    calculator.display.value = POW(b[0]);
  }
  else if(calculator.display.value.includes("SQRT")) {
    let a = calculator.display.value;
    let b = a.split("S");
    calculator.display.value = SQRT(b[0]);
  }
  else {
    calculator.display.value = eval(calculator.display.value);
  }
}
