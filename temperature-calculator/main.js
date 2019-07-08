//simple addition calc

//event listener
document.getElementById('calc-btn1').addEventListener('click', convertFahrenheit);
document.getElementById('calc-btn2').addEventListener('click', convertCelsius);

//functions
function convertFahrenheit (){
  //input (2 numbers)
  let fah = Number(document.getElementById('fah').value);

  //process - add 2 numbers
  let conversion = (fah - 32)*5/9;

  //output - display sum
  document.getElementById('result1')
.innerHTML = conversion;
}

function convertCelsius (){
  //input (2 numbers)
  let cel = Number(document.getElementById('cel').value);

  //process - add 2 numbers
  let conversion = (cel * 9/5) + 32;

  //output - display sum
  document.getElementById('result2')
.innerHTML = conversion;
}