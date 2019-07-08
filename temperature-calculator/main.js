//temperature conversion

//event listener
document.getElementById('calc-btn1').addEventListener('click', convertFahrenheit);
document.getElementById('calc-btn2').addEventListener('click', convertCelsius);

//functions
function convertFahrenheit() {
  //input
  let fah = Number(document.getElementById('fah').value);

  //process - formula
  let conversion = (fah - 32) * 5 / 9;

  //output - display celsius
  document.getElementById('result1')
    .innerHTML = conversion;
}

function convertCelsius() {
  //input
  let cel = Number(document.getElementById('cel').value);

  //process - formula
  let conversion = (cel * 9 / 5) + 32;

  //output - display fajernheit
  document.getElementById('result2')
    .innerHTML = conversion;
}